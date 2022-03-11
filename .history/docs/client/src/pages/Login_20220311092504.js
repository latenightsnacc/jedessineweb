import { useAuth } from "../context/useAuth";

const Login = () => {
    const { login } = useAuth()
    return(
        <div>
            <form>
                <input 
                    type={"email"}
                    name={"email"}
                    placeholder={"youremail@example.com"}
                />
                <input 
                    type={"password"}
                    name={"password"}
                    
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;