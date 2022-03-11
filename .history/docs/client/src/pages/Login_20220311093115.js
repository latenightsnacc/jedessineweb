import { useAuth } from "../context/useAuth";

const Login = () => {
    const { login, auth } = useAuth();
    return(
        <div>
            <form>
            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <br />
            <button onClick={login} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;