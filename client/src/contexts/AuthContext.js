import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function getFirebaseToken() {
        return auth.currentUser.getIdToken().then((token) => {
            return token
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            if (currentUser) {
                setToken(getFirebaseToken)
                console.log(token)  
                setLoading(false)
            }
            
        });

        return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        token,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
