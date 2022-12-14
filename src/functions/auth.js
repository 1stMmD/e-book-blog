import { auth } from "../firebase";
import { 
    GoogleAuthProvider , 
    signInWithPopup , 
    signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged,
    signOut as sOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from "firebase/auth";
import store from "../redux/configureStore";
import { changeUser } from "../redux/authSlice";

import { getUserDoc } from "./firestore";

export const signInWithGoogle = async () => {
    await signInWithRedirect(auth , new GoogleAuthProvider())
}

export const handleAuthChanges = () => {
    const unsubscribe = onAuthStateChanged(auth , (user) => {
        if(!user){
            store.dispatch(changeUser(null));
            console.log("no users found")
            return
        }
        getUserDoc({
            id : user.uid,
            email : user.email,
            displayName : user.displayName
        })
        store.dispatch(changeUser({
            displayName : user.displayName,
            email : user.email,
            uid : user.uid
        }));
    })

    return unsubscribe
}

export const signupWithEmail = (email , password , setError) => {
    createUserWithEmailAndPassword(auth , email , password)
    .then(() => {
        console.log("signed in")
        window.location="/"
    })
    .catch((err) => {
        console.log(err)
        setError(err.toString())
    })
}

export const signInWithEmail = (email , password) => {
    signInWithEmailAndPassword(auth , email , password)
    .then(() => {
        console.log("signed in")
        window.location="/"
    })
    .catch((err) => {
        console.log(err)
    })
}

export const signOut = () => {
    sOut(auth)
}

