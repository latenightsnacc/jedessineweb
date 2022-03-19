import {useState, useEffect} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import MemberMenu from "../../components/MemberMenu";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';
import Container from "../../components/Container";
import Layout from "../../components/Layout";
// import ProfilePic from "../../assets/Debs.png";
import MiniLayout from "../../components/MiniLayout";
import CorperBanner from "../../components/CorperBanner";
const ViewAttendance = () => {
    Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:4000/api/auth/signin")
    .then(res => {
        if(res.data){
            console.log(res);
        }
    })
    const { user } = useAuth();
    const navigate = useNavigate();
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
                   itemColor1={"text-gray-300"}
                   itemColor3={"text-green-500"}
                   itemColor2={"text-gray-300"}
                   itemColor4={"text-gray-300"}
                   />
                   
               </Container>
               <Spacer />
               <Container>
                    <MiniLayout>
                    <div className="w-full md:w-4/6 mx-auto py-3 px-10 text-sm tracking-wider">
                        <table className="w-full border-collapse border border-slate-400  rounded">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-left font-medium tracking-wider border border-slate-300 py-1">Month </th>
                                    <th scope="col" className="text-center font-medium tracking-wider border border-slate-300">Amount</th>
                                    <th scope="col" className="text-center border font-medium tracking-wider border-slate-300">Status</th>
                                    
                                </tr>
                            </thead>
                            <tbody className="font-light">
                            <tr>
                                <th className="text-left border border-slate-300 font-medium tracking-wider py-1">January</th>
                                <td className="text-center font-medium text-green-400 border border-slate-300">
                                    100
                                </td>
                                <td className="text-center text-green-400 border border-slate-300">
                                    <i class="fa-solid fa-square-check"></i>
                                </td>
                                
                                <td className="text-center text-red-400 border border-slate-300">
                                <i class="fa-solid fa-square-xmark"></i>
                                </td>
                            </tr>    
                                                        
                            </tbody>
                        </table>
                    </div>
                    </MiniLayout>
               </Container>
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default ViewAttendance;