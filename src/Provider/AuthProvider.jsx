import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const forgetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
           setUser(loggedUser)
           setLoading(false)
         })
         return () => {
           unSubscribe()
         }
      }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        login,
        forgetPassword,
        googleLogin,
        facebookLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;