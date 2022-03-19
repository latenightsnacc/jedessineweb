import { useAuth } from "../context/useAuth";
import Axios from "axios";
import MemberMenu from "../components/MemberMenu";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Container from "../components/Container";
import Layout from "../components/Layout";
import AttendanceNotification from "../components/AttendanceNotification";
import MiniLayout from "../components/MiniLayout";
import CorperBanner from "../components/CorperBanner";
import DuesNotification from "../components/DuesNotification";

const MemberDashboard = () => {
    Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:4000/api/auth/signin")
    .then(res => {
        if(res.data){
            console.log(res);
        }
    })
    const { user } = useAuth();
    console.log(user);
    let roles = user.roles;
    let allRoles = roles.split(",");
    console.log(allRoles);
    let excoRole, url
    const excoRoles = {
        'Secretary General': 'http://localhost:3000/dashboard/secretarygeneral/',
        'Treasurer': 'http://localhost:3000/dashboard/treasurer/',
        'President': 'http://localhost:3000/dashboard/secretarygeneral/'
    }
    if (allRoles[1] === excoRoles["Secretary General"]){

    }
    return(
        <>
           <Navbar />
           <Spacer />
           <Layout>
               <CorperBanner 
                firstname={user.firstname}
                statecode={user.statecode}
                roles={user.roles}
                excoRole={user.surname}
                cdsGroup={user.cdsGroup}
                profilePic={user.profilePic}
                altText={`${user.firstname} ${user.surname}`}
               />
               <div className="">
               <Spacer />
               </div>
               
               <Container>
               <MemberMenu 
                   itemColor2={"text-gray-300"}
                   itemColor1={"text-green-400"}
                   itemColor3={"text-gray-300"}
                   />
                   
               </Container>
               <Spacer />
               <Container>
                   <MiniLayout>
                       
                       <AttendanceNotification    
                            title={'Meeting'} 
                            status={'Present'}
                        />
                        <DuesNotification
                            title={'Monthly Dues - January'}
                            amount={'100'}
                            status={'Paid'}
                         />
                        <DuesNotification
                            title={'Monthly Dues - February'}
                            amount={'100'}
                            status={'Unpaid'}
                         />
                   </MiniLayout>
               </Container>
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default MemberDashboard;