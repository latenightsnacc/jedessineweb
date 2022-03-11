import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const MemberDashboard = (props) => {

    const { logout, auth, user } = useAuth();
    const navigate = useNavigate()
    return(
        <div>
            <h1>Member Dashboard</h1>
            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <div>
                <h2>Details</h2>
                <p>{user.name}</p>
                <p>{user.statecode}</p>
                <p>{user.role[0]} {user.role.find('Secretary General') ? <button onClick={() => props.push('/dashboard/secretarygeneral')}></button> : null}</p>
                <p>{user.cdsGroup}</p>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default MemberDashboard;