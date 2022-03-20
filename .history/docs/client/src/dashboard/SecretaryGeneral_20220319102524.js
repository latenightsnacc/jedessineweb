import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
const SecretaryGeneralDashboard = () => {

    const { logout, auth, user } = useAuth();
    const [monthlyDues, setMonthlyDues] = useState([]);
    const [projectDues, setProjectDues] = useState([]);
    const [eventDues, setEventDues] = useState([]);

    useEffect( () => {
        Axios.get("http://localhost:3001/mDues")
        .then( response => {
            setMonthlyDues(response.data);
        }).catch( error => {
            console.log(error)
        })

        Axios.get("http://localhost:3001/pDues")
        .then( response => {
            setProjectDues(response.data);
        }).catch( error => {
            console.log(error)
        })

        Axios.get("http://localhost:3001/eDues")
        .then( response => {
            setEventDues(response.data);
        }).catch( error => {
            console.log(error)
        })
    }, [])
    console.log(monthlyDues);
    let fees = [];
    let mDuesTotal = 0;
    let pDuesTotal = 0;
    let eDuesTotal = 0;
    let duesTotal = 0;

    for(const row of monthlyDues){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        mDuesTotal = fees.reduce((a,b) => {return a + b});
        
    }
    for(const row of projectDues){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        pDuesTotal = fees.reduce((a,b) => {return a + b});
        
    }
    for(const row of eventDues){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        eDuesTotal = fees.reduce((a,b) => {return a + b});   
    }
    duesTotal = mDuesTotal + pDuesTotal + eDuesTotal;
    const navigate = useNavigate();
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
            <button onClick={() => navigate("/dashboard/member") }>Back</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default SecretaryGeneralDashboard;