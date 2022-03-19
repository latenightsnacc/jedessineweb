import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import MemberMenu from "../components/MemberMenu";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Container from "../components/Container";
import Layout from "../components/Layout";

import MiniLayout from "../components/MiniLayout";
import CorperBanner from "../components/CorperBanner";

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
    return(
        <>
           <Navbar />
           <Spacer />
           <Layout>
               <CorperBanner 
                firstname={user.firstname}
                statecode={user.statecode}
                roles={user.roles}
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
                //    itemColor4={"text-gray-300"}
                   />
                   
               </Container>
               
               <Container>
                   <MiniLayout>
                       
                       <div className="w-full md:w-4/6 mx-auto shadow rounded py-3 p-10 text-sm tracking-wider my-3">
                            <span className="text-gray-400">Wednesday, 22nd March 2022</span>
                            <div className="mt-2">
                                <div className="my-2">Attendance: <span className="text-gray-800 font-semibold">Meeting</span></div>
                                <div >Status: <span className="text-green-500 font-semibold">Present</span></div>
                            </div>
                       </div>
                   
                   </MiniLayout>
                    
               </Container>
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default MemberDashboard;