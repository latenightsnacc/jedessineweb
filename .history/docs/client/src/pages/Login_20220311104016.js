import { useState } from "react";
import { useAuth } from "../context/useAuth";

export const details = {
    email: '',
    password: ''
}
const Login = () => {
    const { login, auth } = useAuth();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ]= useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
        details.email = email;
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        details.password = password;
    }
    return(
        <div>
            <div>
                <p></p>
            </div>
            <div>Email:
                <input 
                    type={'email'}
                    name={'email'}
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div>Password:
                <input 
                    type={'password'}
                    name={'password'}
                    value={password}
                    onChange={handlePassword}
                />
            </div>
            

            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <br />
            <button onClick={login}>Login</button>
            
        </div>
    )
}

export default Login;