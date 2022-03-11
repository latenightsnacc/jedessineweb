import { Link } from "react-router-dom";
import { logout } from "../auth/actions.context";
import {useAuthDispatch} from '../auth/context.context';

import Logo from '../logo.png';
import Container from "./Container";
import Layout from "./Layout";


const Navbar = (props) => {
    const dispatch = useAuthDispatch();
    
    const handleLogout = () => {
        logout(dispatch);

        props.history.push('/api/auth/signin');
    }
    return (
        <header className="shadow-sm bg-white sticky top-0 z-50 py-2">
            <Layout>
                <Container>
                    <nav className="flex flex-row justify-between items-center">
                        <Link to={'/dashboard/member'}>
                            <span className="block w-5/6 md:w-4/6">
                                <img src={Logo}  alt="" className="w-80 md:w-96" />
                            </span>
                        </Link>
                        
                        <button onClick={handleLogout}
                        className="text-sm font-light py-2 px-3 md:shadow-sm flex items-center no-underline rounded md:bg-gray-100 bg-opacity-50 hover:bg-opacity-100 hover:bg-green-500 text-sm text-black hover:text-white flex items-center">
                            <span><i className="fas fa-sign-out-alt"></i></span>
                            <span className="pr-2 hidden md:inline ml-1">Log Out</span> 
                    </button>
                    </nav>
                </Container>
            </Layout>
    </header>
    )
}

export default Navbar;