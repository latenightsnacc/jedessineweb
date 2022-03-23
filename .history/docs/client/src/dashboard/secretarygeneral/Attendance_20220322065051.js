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
            "year": {
                records: [],
                dates: [],
                present: 0,
                absent: 0,
                late: 0,
                total: 0
            },
            
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
    
    let unique = [];

    const onlyUnique = (value, index, arr) => {
        return arr.indexOf(value) === index;
    }
    let dates = new Set();
    for (let i = 1; i < results.length; i++){
        let a = results[i];
        let yearRecorded = results[i].year;
        const m = a.month;
        let mt = month[0];
        switch (m) {
            case 'January': 
            mt.jan[0].records.push(a);
            break
            case 'February': 
            mt.feb.push(a);
            break
            case 'March': 
                dates.add(results[i].date);
                mt.mar[0].records.push(a);
                unique = dates;
                if (dates.size > 0 && i === results.length - 1) {
                    if(unique){
                        mt.mar[0].dates.push(unique);
                    }
                }
            break;
            case 'April':
                let april = {
                    `${yearRecorded}`: {
                        dates: [],
                        records: [a],
                        present: 0,
                        absent: 0,
                        late: 0,
                        lateFeesCollected: 0,
                        eventFeesCollected: 0
                    }
                };
                april[] 
                month.push(april);
            // mt.april[0]["year"] = mt.april[0][`${yearRecorded}`];
            //delete Object.assign(mt.april[0], {[yearRecorded]: mt.april[0]["year"] })["year"];
            break
            case 'May': 
            mt.may.push(a);
            break
            case 'June': 
            mt.june.push(a);
            break
            case 'July': 
            mt.july.push(a);
            break
            case 'August': 
            mt.aug.push(a);
            break
            case 'September': 
            mt.sept.push(a);
            break
            case 'October': 
            mt.oct.push(a);
            break
            case 'November': 
            mt.nov = m;
            break
            case 'December': 
            mt.dec.push(a);
            break
    
            default:
            return null;
        }
    }
    month[0].mar[0].records.map(x => {
        if(x.status === 'present'){
            month[0].mar[0].present += 1;
        } else if (x.status === 'absent'){
            month[0].mar[0].absent += 1;
        } else {
            month[0].mar[0].late += 1;
        }
        return x;
    });
    console.log(month);
    
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