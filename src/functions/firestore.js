import { firestore } from "../firebase";
import store from "../redux/configureStore";
import {
    collection,
    getDoc,
    doc,
    setDoc,
} from "firebase/firestore";

// collections
const users = collection(firestore , "users");

export const getUserDoc = async ({id , displayName}) => {
    const docRef = doc(users , id);
    let snapshot;
    try{
        snapshot = await getDoc(docRef);
    }
    catch{
        console.log("error while getting doc")
        return
    }
    
    if(snapshot.exists()){
        console.log("exists")
        return
    }
    try{
        await setDoc(docRef,{
            email : id,
            name : displayName
        })
    }
    catch{
        console.log("error while creating doc")
        return
    }
    getUserDoc({id , displayName});
}