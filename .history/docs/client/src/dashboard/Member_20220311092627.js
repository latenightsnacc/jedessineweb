import { useAuth } from "../context/useAuth";

const MemberDashboard = () => {

    const { logout } = useAuth();
    return(
        <div>
            <h1>Member Dashboard</h1>
            <div>
                <h2>Details</h2>
            </div>
            <button onClick={}>Logout</button>
        </div>
    )
}

export default MemberDashboard;