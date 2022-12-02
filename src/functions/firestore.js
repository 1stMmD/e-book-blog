import { firestore } from "../firebase";
import store from "../redux/configureStore";
import { 
    changeUser
 } from "../redux/authSlice";
import {
    collection,
    getDoc,
    doc,
    setDoc,
    addDoc,
    serverTimestamp,
    where , query,
    deleteDoc, onSnapshot,
    updateDoc
} from "firebase/firestore";

// collections
const users = collection(firestore , "users");
const books = collection(firestore , "books");
const requests = collection(firestore , "requests");

// user
export const getUserDoc = async ({id , email , displayName}) => {
    const docRef = doc(users , id);
    let snapshot;
    try{
        snapshot = await getDoc(docRef);
    }
    catch(err){
        console.log(err.toString())
        console.log("error while getting doc")
        return
    }
    
    if(snapshot.exists()){
        store.dispatch(changeUser(snapshot.data()))
        console.log("exists")
        return
    }
    try{
        await setDoc(docRef,{
            uid : id,
            email : email,
            name : displayName || "User",
            author : false,
            admin : false
        })
    }
    catch(err){
        console.log("error while creating doc")
        return
    }
    getUserDoc({id , email , displayName});
}

export const addRequest = async (uid,email) => {
    try{
        await setDoc(doc(requests , uid),{
            email,
            uid
        })
        window.location.reload();
    }
    catch(err){
        console.log(err)
        return false
    }
}

export const checkRequest = async (id) => {
    try{
        const snapshot = await getDoc(doc(requests , id))
        return snapshot.exists()
    }
    catch(err){
        console.log(err)
        return false
    }
}

//books
export const createBookDoc = async ({
    name, author , 
    content, about,
    cover , categorys ,
    },
    setError,
    setSuccess
) => {
    return addDoc(books , {
        name,
        author,
        content,
        about,
        cover,
        categorys,
        createdAt : serverTimestamp(),
        createdBy : store.getState().authSlice.user.uid
    })
    .then(() => {
        setSuccess("موفق")
    })
    .catch((err) => {
        setError(err.name)
    })
}

export const getBooksByQuery = async (
    property , operator , value, setData , setPending , setError
    ) => {
    const q = query(books , where(property , operator , value));

    const unsubscribe = onSnapshot(q , (snapshots) => {
            setData([])
            setPending(false)
            setError(null)
            
            if(!snapshots.docs[0]){
                setData([])
                setPending(false)
                setError(null)
                return
            } 
            const finale = snapshots.docs.map((item) => {
                return {
                    ...item.data(),
                    docId : item.id
                }
            }) 
            setData(finale)
            setPending(false)
            setError(null)
    });
          
    return unsubscribe 
}

export const getBook = async (id) => {

    if(!id) return

    try{
        const snapshot = await getDoc(doc(books , id));
        if(snapshot.exists()) return {...snapshot.data()}
        return {data : null , error : ""}
    }
    catch(err){
        return {data : null , error : err.toStrring()}
    }
}

export const deleteBook = async (id , setId) => {
    try{
        await deleteDoc(doc(books,id))
        setId("")
    }
    catch(err){
        console.log(err)
    }
}

export const updateBook = async (id , data) => {
    try{
        await updateDoc(doc(books,id),
            {
                name : data.name,
                author : data.author,
                about : data.about,
                categorys : data.categorys,
                cover : data.cover,
                content : data.content
            },
        );
    }
    catch(err){
        console.log(err.toString())
    }
}