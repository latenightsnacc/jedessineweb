import { useAuth } from "../context/useAuth";
import { useState } from "react";
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
    const { user } = useAuth();
    console.log(user);
    let roles = user.roles;
    let allRoles = roles.split(",");
    let role = '';
    
    switch (allRoles) {
        case 'SecretaryGeneral':
            role = 'secretarygeneral';
            break;
        default:
            role = 'member';
    }
    if (user) {
        if (allRoles[1] === "Secretary General")
        {
            role = 'secretarygeneral';
        } else if (allRoles[1] === "Treasurer") 
        {
            role = 'treasurer';
        } else if (allRoles[1] === "President")
        {
            role = 'president';
        }
    }
    
    console.log(role);
    return(
        <>
           <Navbar />
           <Spacer />
           <Layout>
               <CorperBanner 
                firstname={user.firstname}
                statecode={user.statecode}
                role={allRoles[0]}
                excoRole={allRoles[1]}
                exco={role}
                cdsGroup={user.cdsGroup}
                profilePic={user.profilePic}
                altText={`${user.firstname} ${user.surname}`}
               />
               
               <Spacer />
               
               
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