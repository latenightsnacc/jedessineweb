
import {  Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({children}) => {

    const { auth } = useAuth();

    return auth ? children : <Navigate to={'/'} />
}

export default ProtectedRoute;