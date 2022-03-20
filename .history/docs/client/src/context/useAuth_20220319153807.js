import React, {useState, createContext, useContext, useEffect} from "react";
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
    const [ loading, setLoading ] = useState(true);

    // useEffect(() => {
    //     Axios.get(`${ROOT_URL}/signin`).then((corper) => {
    //         if(corper.data.id) {
    //             console.log('Login check successful!');
    //             setAuth(true);
    //             setUser({
    //                 ...user,
    //                 ...corper.data
    //             })
    //             setLoading(false);
    //         } else {
    //             setAuth(false);
    //             setLoading(false);
    //         }
    //     })
    // 
    const getCorpersList = async () => {
        try{
            return Axios.get(`${ROOT_URL}/${user.cdsGroup}`)
        } catch (e) {
            console.log(e);
        }
    }
    const login = async () => {
        const result = await corperLogin();

        if (result.data.message) {
            console.log(result);
            setAlert(result.data.message);
        } else  {
            console.log("Corper Logged in: ");
            console.log(result);
            setAuth(true);
            sessionStorage.setItem("corperLoggedIn", "true");
            setUser({
                ...user,
                firstname: result.data.firstname,
                surname: result.data.surname,
                batch: result.data.batch,
                statecode: result.data.statecode,
                cdsGroup: result.data.cdsGroup,
                lga: result.data.lga,
                ppa: result.data.ppa,
                email: result.data.email,
                phoneNo: result.data.phoneNo,
                profilePic: result.data.profilePic,
                roles: result.data.roles,
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
            setUser([]);
            setAlert('');
            navigate("/api/auth/signin");
        }
    }

    const corperLogin = async () => {
        console.log(details);
        try{
            return Axios.post(`${ROOT_URL}/signin`, {
                email:details.email,
                password: details.password
            })
        }catch(e){
            console.log(e);
        }
    }

    const corperLogout = async () => {
        try{
            return Axios.get(`${ROOT_URL}/signout`);
        }catch(e){
            console.log(e);
        }
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve("Corper Logged out")
        //     }, 300);
        // })
        
    }

    return(
        <AuthContext.Provider value={{user, alert, loading, auth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);