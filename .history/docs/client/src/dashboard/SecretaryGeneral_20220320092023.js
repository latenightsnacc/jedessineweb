import { useAuth } from "../context/useAuth";
import Axios from "axios";
import { useState, useEffect } from "react";
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Menu from '../components/Menu';
import Stats from '../components/Stats';
import Layout from "../components/Layout";
const SecretaryGeneralDashboard = () => {

    const {  user } = useAuth();
    const [members, setMembers] = useState([]);
   
    useEffect( () => {
        Axios.get("http://localhost:4000/getcorpers")
        .then( response => {
            setMembers(response.data);
        }).catch( error => {
            console.log(error)
        })

    }, [])
    const totalMembers = members.length;
    console.log(totalMembers);
    

    
    return(
        <div>
            <Navbar />
            <Layout>
            <Banner position={"Secretary General"} />
            </Layout> 
            <Menu 
                textClr1={"text-green-500"}
                textClr2={"text-gray-300"}
                textClr3={"text-gray-300"}
                textClr4={"text-gray-300"}
                textClr5={"text-gray-300"}
                link1={"../dashboard/secretarygeneral/"}
                link2={"../dashboard/secretarygeneral/attendance"}
                link3={"../dashboard/secretarygeneral/notes"}
                link4={"../dashboard/secretarygeneral/events"}
                link5={"../dashboard/secretarygeneral/reports"}
                navitem1={"Dashboard"}
                navitem2={"Attendance"}
                navitem3={"Notes"}
                navitem4={"Events"}
                navitem5={"Reports"}
            />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <Stats  
                    totalFigure1={`${members}`} totalTitle1={"Total Members"} 
                    totalFigure2={`₦${''}`} totalTitle2={"Total Meetings"} 
                    totalFigure3={`₦${''}`} totalTitle3={"Total Events"} 
                    totalFigure4={`₦${''}`} totalTitle4={"Total Fees Collected"}
                />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default SecretaryGeneralDashboard;