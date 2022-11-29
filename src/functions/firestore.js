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
    getDocs, where , query

} from "firebase/firestore";

// collections
const users = collection(firestore , "users");
const books = collection(firestore , "books");

export const getUserDoc = async ({id , email , displayName}) => {
    const docRef = doc(users , id);
    let snapshot;
    try{
        snapshot = await getDoc(docRef);
    }
    catch(err){
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

export const getBooksByQuery = async (property , operator , value) => {
    const q = query(books , where(property , operator , value));

    try{
        const snapshots = await getDocs(q);

        if(!snapshots.docs[0]){
            return []
        }   
        return snapshots.docs.map((item) => {
            
            return {
                ...item.data(),
                docId : item.id
            }
        })   
        
    }
    catch(err){
        throw new Error(err.name)
    }
}