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
                       <div className="w-full md:w-4/6 mx-auto shadow-xl p-3">
                           <div className="">
                               <span>Attendance: Meeting</span>
                               <span>Date: Wednesday</span>
                               <span>Status: Present</span>
                           </div>
                       </div>
                   <div className="w-full  py-2 px-2  rounded h-20 flex flex-col  justify-center md:flex-row md:justify-start md:items-center shadow-sm my-3">
                       
                        <span className="text-xs md:mr-1 py-1 px-2  w-auto rounded md:bg-green-100 ">{(new Date()).toLocaleDateString('en-US',{
                                weekday: 'short',
                                day: 'numeric',
                                year: 'numeric',
                                month: 'short'
                            })}</span>
                        <span className="text-xs  md:text-sm py-1 px-2"> Attendance ['<span className="text-green-400"> Present </span> '] for CDS Meeting recorded.</span>
                    </div>
                   <div className=" w-full py-2 px-2  rounded h-20 flex flex-col  justify-center md:flex-row md:justify-start md:items-center shadow-sm my-3">
                       
                        <span className="text-xs md:mr-1 py-1 px-2  w-auto rounded md:bg-green-100 ">{(new Date()).toLocaleDateString('en-US',{
                                weekday: 'short',
                                day: 'numeric',
                                year: 'numeric',
                                month: 'short'
                            })}</span>
                        <span className="text-xs  md:text-sm py-1 px-2"> Attendance ['<span className="text-green-400"> Present </span> '] for CDS Event recorded.</span>
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