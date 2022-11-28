import { auth } from "../firebase";
import { 
    GoogleAuthProvider , 
    signInWithPopup , 
    onAuthStateChanged,
    signOut as sOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from "firebase/auth";
import store from "../redux/configureStore";
import { changeUser } from "../redux/authSlice";

import { getUserDoc } from "./firestore";

export const signInWithGoogle = () => {
    signInWithPopup(auth , new GoogleAuthProvider())
    .then(() => {
        console.log("signed in")
        window.location="/"
    })
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

        console.log(user.displayName + " is online")
    })

    return unsubscribe
}

export const signupWithEmail = (email , password) => {
    createUserWithEmailAndPassword(auth , email , password)
    .then(() => {
        console.log("signed in")
        window.location="/"
    })
    .catch((err) => {
        console.log(err)
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
