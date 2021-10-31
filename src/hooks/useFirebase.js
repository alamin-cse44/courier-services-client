import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
        // .then(result =>{
        //     // history.push(redirect_uri);
        //  })
        // rest part implement in login page for redirect user in initial page
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
          });
    } ,[])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;