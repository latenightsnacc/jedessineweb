import React, {useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [auth, setAuthed ] = useState(false);

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
        
    }
}