import React, {useState, createContext, useContext, useEffect } from "react";
import Axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [auth, setAuth ] = useState(false);

    const login = async () => {
        const result = await corperLogin();

        if (result) {
            console.log("Corper Logged in");
            setAuth(true);
        }
    }

    const logout = async () => {
        const result = await corperLogout();

        if(result) {
            console.log("User has logged out.");
            setAuth(false);
        }
    }

    const corperLogin = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Corper Logged In")
            }, 300);
        })
        
    }

    const corperLogout = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Corper Logged out")
            }, 300);
        })
        
    }

    return(
        <AuthContext.Provider value={{auth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)