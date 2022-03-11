import React, {useState, createContext, useContext} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [auth, setAuth ] = useState(false);
    const [ user, setUser ] = useState([]);

    const login = async () => {
        const result = await corperLogin();

        if (result) {
            console.log("Corper Logged in");
            setAuth(true);
            setUser({
                ...user,
                name: 'Deborah Egonu',
                statecode: 'EN/21A/2021',
                role: ['Member', 'Secretary General'],
                cdsGroup: 'Information Communication Technology'
            });
            navigate("/dashboard/member");
        }
    }

    const logout = async () => {
        const result = await corperLogout();

        if(result) {
            console.log("User has logged out.");
            setAuth(false);
            setUser({
                ...user,
                name: '',
                statecode: '',
                role: '',
                cdsGroup: ''
            });
            navigate("/");
        }
    }

    const corperLogin = async () => {
        return Axios.post("http://localhost:4000/api/auth/signin", {
            email:'',
            password: ''
        }).then(response => {
            setTimeout(() => {
                re
            })
        })
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
        <AuthContext.Provider value={{user, auth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);