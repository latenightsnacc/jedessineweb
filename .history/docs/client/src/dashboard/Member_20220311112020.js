import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import MemberMenu from "../components/MemberMenu";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Container from "../components/Container";
import Layout from "../components/Layout";
// import ProfilePic from "../assets/Debs.png"
import MiniLayout from "../components/MiniLayout";

const MemberDashboard = () => {

    const { logout, auth, user } = useAuth();
    const navigate = useNavigate();
    return(
        <div>
            <h1>Member Dashboard</h1>
            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <div>
                <h2>Details</h2>
                <div>
                    {user.firstname}
                </div>
                {/* <p>{user.name}</p>
                <p>{user.statecode}</p>
                <p>{user.role[0]}, {user.role[1] ==='Secretary General' ? <button onClick={() => navigate('/dashboard/secretarygeneral')}>Secretary General</button> : null}</p>
                <p>{user.cdsGroup}</p> */}
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default MemberDashboard;