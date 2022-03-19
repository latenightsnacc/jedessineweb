import Axios from "axios";
import { useAuth } from "../../context/useAuth";
import MemberMenu from "../../components/MemberMenu";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';
import Container from "../../components/Container";
import Layout from "../../components/Layout";
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
                   
                   />
                   
               </Container>
               <Spacer />
               <Container>
                    <MiniLayout>
                    <div className="w-full md:w-4/6 mx-auto shadow rounded py-3 p-10 text-sm tracking-wider">
                        <table className="border-collapse border border-slate-400  rounded">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-left border border-slate-300">Month | Week</th>
                                    <th scope="col" className="text-center border border-slate-300">1</th>
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