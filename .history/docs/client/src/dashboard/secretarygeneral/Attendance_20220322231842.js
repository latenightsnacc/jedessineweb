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
            year: {
                records: [],
                dates: [],
                present: 0,
                absent: 0,
                late: 0,
                total: 0
            }
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

    const getAttendanceStatus = (objRecords, objPresent, objAbsent, objLate) => {
        if(objRecords.length > 0){
            objRecords.map(x => {
                if(x.status === 'present'){
                    objPresent += 1;
                } else if (x.status === 'absent'){
                    objAbsent += 1;
                } else {
                    objLate += 1;
                }
                return x;
            })
            return (objPresent, objAbsent,  objLate);
        }
        
    };
    
    let unique = [];

    let dates = new Set();
    for (let i = 0; i < results.length; i++) {
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
                dates.add(results[i].date);
                mt.april[0][`${yearRecorded}`] = mt.april[0]["year"];
               
                mt.april[0][`${yearRecorded}`].records.push(a);
               unique = dates;
               if (dates.size > 0 && i === results.length - 1) {
                   if(unique){
                       mt.mar[0].dates.push(unique);
                   }
               }
           break;
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
    };
    // results.map((x, index )=> {

    //     const mt = month[0];

    //     switch (x.month) {
    //         case 'January': 
    //         mt.jan[0].records.push(x);
    //         break;
    //         case 'February': 
    //         mt.feb.push(x);
    //         break
    //         case 'March': 
    //             dates.add(x.date);
    //             mt.mar[0].records.push(x);
    //             unique = dates;
    //             if(x.month === 'March'){
    //                 if (dates.size > 0 && index === results.length - 1) {
    //                     if(unique){
    //                         mt.mar[0].dates.push(unique);
    //                     }
    //                 }
    //             }
                
    //         break;
    //         case 'April':
    //             mt.april[0][`${x.year}`] = mt.april[0]["year"];
    //             mt.april[0][`${x.year}`].records.push(x);
    //             dates.add(x.date);
    //             unique = dates;
    //             if (dates.size > 0 && index === results.length - 1) {
    //                 if(unique){
    //                     mt.april[0][`${x.year}`].dates.push(unique);
    //                 }
    //             }
    //         break;
    //         case 'May': 
    //         mt.may.push(x);
    //         break;
    //         case 'June': 
    //         mt.june.push(x);
    //         break;
    //         case 'July': 
    //         mt.july.push(x);
    //         break;
    //         case 'August': 
    //         mt.aug.push(x);
    //         break;
    //         case 'September': 
    //         mt.sept.push(x);
    //         break;
    //         case 'October': 
    //         mt.oct.push(x);
    //         break;
    //         case 'November': 
    //         mt.nov.push(x);
    //         break;
    //         case 'December': 
    //         mt.dec.push(x);
    //         break;
    
    //         default:
    //         return null;
    //     }
    //     return x;
    // });
    // month[0].mar[0].records.map(x => {
    //     if(x.status === 'present'){
    //         month[0].mar[0].present += 1;
    //     } else if (x.status === 'absent'){
    //         month[0].mar[0].absent += 1;
    //     } else {
    //         month[0].mar[0].late += 1;
    //     }
    //     return x;
    // });
    
    delete month[0].april[0]["year"];
    // getAttendanceStatus(month[0].april[0][`${x.year}`].records, month[0].april[0][`${x.year}`].present, month[0].april[0][`${x.year}`].absent, month[0].april[0][`${x.year}`].late);
    getAttendanceStatus(month[0].mar[0].records, month[0].mar[0].present, month[0].mar[0].absent, month[0].mar[0].late);
    console.log(month[0]);
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