import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase_config';

export const AuthContext = createContext(null);

//it is initial step to use auth config
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    //we should makes all functionality as we can deliver it 
    // 1. here i wrote those parameters that pass from child component
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // const updateUser = (displayData) => {
    //     return updateProfile(auth.currentUser, displayData)
        
    // }

    //sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    //state observer(after an user sign in to webpage we put in the useEffect as a we can say it a jar)
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside state observer', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    //globally deliver throw this function
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
        // updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;