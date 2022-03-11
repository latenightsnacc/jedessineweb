import { useState } from "react";
import { useAuth } from "../context/useAuth";

const Login = () => {
    const { login, auth } = useAuth();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ]= useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    return(
        <div>
            <div>

            </div>
            

            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <br />
            <button onClick={login}>Login</button>
            
        </div>
    )
}

export default Login;