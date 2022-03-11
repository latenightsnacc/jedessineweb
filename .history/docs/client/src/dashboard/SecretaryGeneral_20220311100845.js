import { useAuth } from "../context/useAuth";

const SecretaryGeneralDashboard = () => {

    const { logout, auth, user } = useAuth();
    return(
        <div>
            <h1>SecretaryGeneral Dashboard</h1>
            <span>Auth Status: {auth ? "Logged In" : "Not Logged In"}</span>
            <div>
                <h2>Details</h2>
                <p>{user.name}</p>
                <p>{user.statecode}</p>
                <p>{user.role}</p>
                <p>{user.cdsGroup}</p>
            </div>
            <button onClick={() => }>Back</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default SecretaryGeneralDashboard;