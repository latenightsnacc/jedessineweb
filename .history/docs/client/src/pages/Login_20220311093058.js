import { useAuth } from "../context/useAuth";

const Login = () => {
    const { login } = useAuth();
    return(
        <div>
            <form>
            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
                <button onClick={login} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;