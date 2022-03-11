import { useState } from "react";
import { useAuth } from "../context/useAuth";

const Login = () => {
    const { login, auth } = useAuth();

    const [email, setEmail] = useState('');
    const [email, setEmail] = useState('');

    const han
    return(
        <div>
            <input 
                type={'email'}
                name={'email'}
                value={email}
            />

            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <br />
            <button onClick={login}>Login</button>
            
        </div>
    )
}

export default Login;