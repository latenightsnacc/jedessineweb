import { useAuth } from "../context/useAuth";

const Login = () => {
    const { login } = useAuth();
    return(
        <div>
            <form>
                
                <button onClick={login} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;