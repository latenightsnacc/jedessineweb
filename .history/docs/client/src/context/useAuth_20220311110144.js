import React, {useState, createContext, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { details } from "../pages/Login";

const AuthContext = createContext(null);

const ROOT_URL = "http://localhost:4000/api/auth";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [auth, setAuth ] = useState(false);
    const [ user, setUser ] = useState([]);
    const [ alert, setAlert ] = useState('');

    const login = async () => {
        const result = await corperLogin();

        if (result.data.message) {
            console.log(result);
            setAlert(result.data.message);
        } else  {
            console.log("Corper Logged in: ");
            console.log(result);
            setAuth(true);
            setUser({
                ...user,
                firstname: result.data.firstname,
                surname: result.data.firstname,
                batch: result.data.firstname,
                statecode: result.data.firstname,
                cds: 'EN/21A/2021',
                role: ['Member', 'Secretary General'],
                cdsGroup: 'Information Communication Technology'
            });
            setAlert('Login Successful!');
            setTimeout(() => {
                navigate("/dashboard/member");
            }, 300);
            
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
            setAlert('');
            navigate("/");
        }
    }

    const corperLogin = async () => {
        console.log(details)
        try{
            return Axios.post(`${ROOT_URL}/signin`, {
                email:details.email,
                password: details.password
            })
        }catch(e){
            console.log(e);
        }
        
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve("Corper Logged In")
        //     }, 300);
        // })
        
    }

    const corperLogout = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Corper Logged out")
            }, 300);
        })
        
    }

    return(
        <AuthContext.Provider value={{user, alert, auth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);