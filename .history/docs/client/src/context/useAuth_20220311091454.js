import React, {useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [auth, setAuthed ] = useState
}