import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);



    const auth = getAuth();




    const googleProvider = new GoogleAuthProvider();


    // for sign in using google account starts 
    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);
        // .then((result) => {

        //     const user = result.user;
        //     console.log(user);


        // }).catch((error) => {
        //     // Handle Errors here.
        //     console.log(error.message);

        // });

    };

    // for sign in using google account ends


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    // for sign out starts 

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    // for sign out ends 


    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;