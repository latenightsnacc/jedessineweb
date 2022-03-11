import { useState } from "react";
import { useAuth } from "../context/useAuth";

export const details = {
    email: '',
    password: ''
}
const Login = () => {
    const { login, auth, alert } = useAuth();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ]= useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
        details.email = e.target.value;
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        details.password = e.target.value;
    }
    return(
        <div>
            <div>
                {alert !== '' || null ? <p>{alert}</p> : null}
                
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
    return(
        <Layout>
        <Container>
            <div className="flex h-screen flex-col items-center justify-center">
            <div className="text-center mb-4">
            <span className="text-green-500 font-semibold capitalize">CDS E-attendance</span>
                <h1 className="text-black font-medium leading-loose text-2xl uppercase tracking-wide">Corper Login</h1>
                
            </div>
            
                
            
            {
                alert ? <div className="msg mt-2 hidden">
                <p className="text-red-500 text-xs italic">{alert}</p>
                </div> : null
            }
                <form  className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="relative group py-2 mb-6 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="email">
                        Email
                    </label>
                    </div>
                    <input 
                    type={'email'}
                    name={'email'}
                    value={email}
                    placeholder="email@example.com"
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={onChangeEmail}
                    required
                    disabled={loading} />
                    
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold capitalize" for="password">
                        password
                    </label>
                    </div>
                    <input 
                    type={'password'}
                    name={'password'}
                    id={'password'}
                    value={password}
                    placeholder="******************"
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={onChangePassword}
                    required
                    disabled={loading} />
                    
                </div>
                
                <div className="flex w-full flex-col">
                    
                    <button id="loginBtn" onClick={login}  disabled={loading} className="bg-transparent hover:bg-transparent text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    
                    Login
                    </button>

                    
                    <div className="flex flex-row text-xs md:text-sm justify-between">
                    <span className="inline-block mt-2 align-baseline  text-gray-500  text-center">
                        Don't have a profile? 
                        <Link to={"/api/auth/signup"}>
                            <span className="text-green-400 ml-1 cursor-pointer text-underline font-medium">Create</span>
                        </Link>
                    </span>
                    <span className="inline-block mt-2 align-baseline text-gray-500 hover:text-green-500 text-center">
                        Forgot Password?
                    </span>
                    </div>
                </div>
                </form>
                <Footer />
                </div>
            </div>
        
        </Container>
        </Layout> 
    )
}

export default Login;