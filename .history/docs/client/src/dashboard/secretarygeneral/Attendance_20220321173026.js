import Axios from "axios";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AttendanceSummary from "../../components/AttendanceSummary";
import BreadCrumbs from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import Button from "../../components/Button";

const Attendance = () => {
    const {  user } = useAuth();
    const navigate = useNavigate();
    const [results, setResults] =useState([]);
    const fetchData = () => {
        Axios.get("http://localhost:4000/attendance")
        .then(Response => {
            setResults(Response.data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    const month = [{
        jan: [],
        feb:[],
        mar: [],
        april:[],
        may:[],
        june:[],
        july:[],
        aug:[],
        sept:[],
        oct:[],
        nov:[],
        dec:[]
    }];
    
    for (let i = 1; i < results.length; i++){
        let a = results[i];
        console.log(a);
        const m = a;
        switch (m) {
            case 'January': 
            month[0].jan.push(a);
            break
            case 'February': 
            month[1].feb.push(a);
            break
            case 'March': 
            month[2].mar.push(a);
            break
            case 'April': 
            month[3].april.push(a);;
            break
            case 'May': 
            month[4].may.push(a);
            break
            case 'June': 
            month[5].june.push(a);
            break
            case 'July': 
            month[6].july.push(a);
            break
            case 'August': 
            month.aug.push(a);
            break
            case 'September': 
            month.sept.push(a);
            break
            case 'October': 
            month.oct.push(a);
            break
            case 'November': 
            month.nov = m;
            break
            case 'December': 
            month.dec.push(a);
            break
    
            default:
            return null;
        }
    }
    return(
        <>
            <Navbar />
            <Spacer />
            <Layout>
                <Container>
                <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                excoDashboard={'secretarygeneral'}
                excoDashboardLabel={'Secretary General Dashboard'} 
                displayLevel2={'hidden'}
                excoFinalPage={"attendance"}
                excoFinalPageLabel={"Attendance List"}
                activeTextColor2={'text-green-500'} 
                />
                <Spacer />
                <div className="flex flex-row h-full items-center justify-between">
                    <PageTitle title={"Attendance List"} />
                    <Link to={"/dashboard/secretarygeneral/attendance/new"}>
                        <Button label="new" icon={`far fa-plus`} />
                    </Link>
                    
                </div>
                
                </Container>
                
            </Layout>
            
           
            
            <Footer />
        </>
    )
}

export default Attendance;