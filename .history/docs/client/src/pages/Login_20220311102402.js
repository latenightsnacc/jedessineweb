import { useAuth } from "../context/useAuth";

const Login = () => {
    const { login, auth } = useAuth();
    return(
        <div>
            <input
            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <br />
            <button onClick={login}>Login</button>
            
        </div>
    )
}

export default Login;