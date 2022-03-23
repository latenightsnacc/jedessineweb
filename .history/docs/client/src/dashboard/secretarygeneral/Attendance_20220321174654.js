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
        jan: [{
            records: [],
            dates: [],
            present: 0,
            absent: 0,
            late: 0,
            total: 0
        }],
        feb:[],
        mar: [{
            records: [],
            dates: [],
            present: 0,
            absent: 0,
            late: 0,
            total: 0
        }],
        april:[{
            records: [],
            dates: [],
            present: 0,
            absent: 0,
            late: 0,
            total: 0
        }],
        may:[],
        june:[],
        july:[],
        aug:[],
        sept:[],
        oct:[],
        nov:[],
        dec:[]
    }];
    
    const dates = [{}];

    for (let i = 1; i < results.length; i++){
        let a = results[i];
        let dates;
        const m = a.month;
        switch (m) {
            case 'January': 
            month[0].jan[0].records.push(a);
            break
            case 'February': 
            month[0].feb.push(a);
            break
            case 'March': 
            month[0].mar[0].records.push(a);
            let d = month[0].mar[0].records.length > 0 ? dates = [...new Set(month[0].mar[0].records.map(x => x.date))]: null;
            dates.length > 0 ? 
            break;
            case 'April': 
            month[0].april[0].records.push(a);;
            break
            case 'May': 
            month[0].may.push(a);
            break
            case 'June': 
            month[0].june.push(a);
            break
            case 'July': 
            month[0].july.push(a);
            break
            case 'August': 
            month[0].aug.push(a);
            break
            case 'September': 
            month[0].sept.push(a);
            break
            case 'October': 
            month[0].oct.push(a);
            break
            case 'November': 
            month[0].nov = m;
            break
            case 'December': 
            month[0].dec.push(a);
            break
    
            default:
            return null;
        }
    }
    console.log(...month);
    month.map(mth => {
        console.log(mth);
        return mth;
    })
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