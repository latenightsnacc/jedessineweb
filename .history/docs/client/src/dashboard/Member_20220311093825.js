import { useAuth } from "../context/useAuth";

const MemberDashboard = () => {

    const { logout, auth, user } = useAuth();
    return(
        <div>
            <h1>Member Dashboard</h1>
            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <div>
                <h2>Details</h2>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default MemberDashboard;