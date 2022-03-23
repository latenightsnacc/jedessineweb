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
    
    const months = {
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
    };
    let a;
    for(const row of results){
        a = row;
        const m = a.months;
        switch (m) {
            case 'January': 
            months.jan.push(a);
            break
            case 'February': 
            months.feb.push(a);
            break
            case 'March': 
            months.mar.push(a);
            break
            case 'April': 
            months.april.push(a);;
            break
            case 'May': 
            months.may.push(a);
            break
            case 'June': 
            months.june.push(a);
            break
            case 'July': 
            months.july.push(a);
            break
            case 'August': 
            months.aug.push(a);
            break
            case 'September': 
            months.sept.push(a);
            break
            case 'October': 
            months.oct.push(a);
            break
            case 'November': 
            months.nov.push();
            break
            case 'December': 
            months.dec.push(a);
            break
    
            default:
            return null;
        }
    
        
    }
    
    const lt = months.mar.length;
    const mtx = months.mar;
    let mPresent = [];
    let mAbsent = [];
    let mLate = [];
    let mTotal = 0;
    
    
        mtx.map((x) => {
            console.log(x.status);
            if(x.status === 'present'){
                mPresent.push(x);
               
            } else if (x.status === 'late'){
                mLate.push(x);
                
            } else {
                mAbsent.push(x);
            }
            
            return x;
        }) 
    
    
    console.log(`Present: ${mPresent.length}`);
    console.log(`Late: ${mLate.length}`);
    console.log(`Absent: ${mAbsent.length}`);
    console.log(mTotal);
    console.log(`Total: ${mPresent.length + mLate.length}`);
    const mKeys = Object.keys(months);
   
    const mValues = Object.values(months);
    // console.log(mValues[1][1].attendance_month);
    let attendeesTotal = 0;
    let attendees = [];
    let totalAttendees = [];
    let lateAttendeesTotal = 0;
    let lateAttendees = [];
    let absenteesTotal = 0;
    let absentees = [];
    mValues.map(a => {
        if(a.length > 0){

            a.map(b => {
                if(b.status === "present"){
                    attendees.push(1)
                } else if (b.status === "late"){
                    lateAttendees.push(1)
                } else if (b.status === "absent") {
                    absentees.push(1)
                }
                return b;
            })
        }
        return a;
    })
    totalAttendees.push(...attendees,...lateAttendees);
    totalAttendees.length > 0 ?  attendeesTotal = totalAttendees.reduce( (a,b) => {return a + b }): attendeesTotal = 0 ; 
    lateAttendees.length > 0 ?  lateAttendeesTotal = lateAttendees.reduce( (a,b) => {return a + b }): lateAttendeesTotal = 0;                     
    absentees.length > 0 ? absenteesTotal = absentees.reduce( (a,b) => {return a + b }) : absenteesTotal = 0;                     
    
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
                {mValues.map((mon,key) => {
                   if(mon.length > 0){
                       
                       return (
                        <div key={key} 
                        className={"hover:cursor-pointer"} 
                        onClick={() => {navigate(`../dashboard/secretarygeneral/attendance/${mon[0].year}/${mon[0].month}`)}}>
                            <AttendanceSummary 
                            tag={mon[0].month + ' '+ mon[0].year}
                            date={''}
                            attendeesTotal={attendeesTotal}
                            lateAttendeesTotal={lateAttendeesTotal}
                            absenteesTotal={absenteesTotal}
                            lateFee={0} />
                        </div>
                    )
                       
                    }
                    return mon;
                    
                })} 
                </Container>
                
            </Layout>
            
           
            
            <Footer />
        </>
    )
}

export default Attendance;