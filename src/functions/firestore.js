import { useEffect , useState } from "react"

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
    where , query, limit,
    deleteDoc, onSnapshot,
    updateDoc,
    orderBy , getCountFromServer
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

const check = async (id) => {

    const {admin , uid } = store?.getState().authSlice.user;

    try{
        const snapshot = await getDoc(doc(books , id));
        const book = snapshot.data()
        if(book.createdBy !== uid && !admin) return false
        return true
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
        createdBy : store.getState().authSlice.user.uid,
        likedBy : []
    })
    .then(() => {
        setSuccess("موفق")
    })
    .catch((err) => {
        setError(err.name)
    })
}

export const getBooksByQuery = async (
    property , operator , value, setData , setPending , setError,
    LIMIT
    ) => {
    const q = query(books , where(property , operator , value) ,limit(LIMIT));

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
                    docId : item.id,
                    createdAt : item.createdAt
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

    const available = await check(id)
    if(!available) return
    
    try{
        await deleteDoc(doc(books,id))
        setId("")
    }
    catch(err){
        console.log(err)
    }
}

export const updateBook = async (id , data) => {

    const available = await check(id)
    if(!available) return

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

export const useWatchForBook = (id) => {

    const [data , setData] = useState(null);
    const [pending , setPending] = useState(null);
    const [error , setError] = useState(null);

    useEffect(() => {

        if(!id) return
        setData(null)
        setPending(true)
        setError(null)

        const unsub = onSnapshot(doc(books , id),(snapshot) => {
            try{
                const book = {
                    ...snapshot.data(),
                    docId : snapshot.id
                }

                setData(book)
                setPending(false)
                setError(null)
            }
            catch(err){
                setData(null)
                setPending(false)
                setError(err.name)
            }
        })

        return () => unsub()
    },[id])

    return[data , pending , error]
}

export const useGetBooksByQuery = (property , operator , value , LIMIT) => {
    const [data , setData] = useState([]);
    const [pending , setPending] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {

        const q = query(books , where(property , operator , value) ,limit(LIMIT));

        const unsub = onSnapshot(q , (snapshots) => {
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
                    docId : item.id,
                    createdAt : item.createdAt
                }
            }) 
            setData(finale)
            setPending(false)
            setError(null)
        });        

        return () => unsub()
    },[property , operator , value , LIMIT])

    return [ data , pending , error ];
} 

export const likeTheBook = async (docId , uid) => {
    try{
        const docRef = doc(books,docId)
        const snapshot = await getDoc(docRef)
        const likedBy = snapshot.data().likedBy
        if(likedBy.includes(uid)){
            let i = likedBy.findIndex(item => item === uid);
            likedBy.splice(i,1)
        }
        else{
            likedBy.push(uid);
        }
        updateDoc(docRef , {
            likedBy
        })
    }
    catch(err){
        console.log(err.name)
    }
}

export const useGetDataWithPagination = () => {
    const dataLimit = 50;
    const [data,setData] = useState([]);
    const [pending,setPending] = useState(true);
    const [error,setError] = useState([]);
    const [hasMore,setHasMore] = useState(false);

    useEffect(() => {
        const q = query(where("name"))
    },[])
}