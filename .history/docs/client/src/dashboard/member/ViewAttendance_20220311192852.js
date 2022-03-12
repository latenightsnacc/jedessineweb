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
                   itemColor2={"text-green-500"}
                   itemColor3={"text-gray-300"}
                   itemColor4={"text-gray-300"}
                   />
                   
               </Container>
               <Spacer />
               <Container>
                    <MiniLayout>
                    <table className="table table-sm table-bordered border-success text-xs md:text-sm bg-white rounded">
                        <thead>
                            <tr>
                                <th scope="col" className="text-left">Month | Week</th>
                                <th scope="col" className="text-center ">1</th>
                                <th scope="col" className="text-center">2</th>
                                <th scope="col" className="text-center ">3</th>
                                <th scope="col" className="text-center ">4</th>
                                <th scope="col" className="text-center ">5</th>
                                <th scope="col" className="text-center ">%</th>
                            </tr>
                        </thead>
                        <tbody className="font-light">
                        <tr>
                            <th cl>January</th>
                            <td className="text-center text-green-400">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-yellow-300">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-green-400">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-yellow-300">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-red-400">
                            <i class="fa-solid fa-square-xmark"></i>
                            </td>
                            <td className="text-center">
                                100%
                            </td>
                            
                        </tr>    
                                                      
                        </tbody>
                    </table>
                    </MiniLayout>
               </Container>
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default ViewAttendance;