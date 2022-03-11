import React, {useState, createContext, useContext, useEffect } from "react";
import Axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [auth, setAuth ] = useState(false);

    const login = async () => {
        const result = await corperLogin();

        if (result) {
            console.log("Corper Logged in");
            setAuthed(true);
        }
    }

    const logout = async () => {
        const result = await corperLogout();

        if(result) {
            console.log("User has logged out.");
            setAuthed(false);
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
        </AuthContext.Provider>
    )
}