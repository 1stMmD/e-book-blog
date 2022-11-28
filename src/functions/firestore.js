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
    serverTimestamp

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
            name : displayName || "user",
            books : [],
            savedBooks : [],
            author : false
        })
    }
    catch(err){
        console.log("error while creating doc")
        return
    }
    getUserDoc({id , email , displayName});
}

export const createBookDoc = ({
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