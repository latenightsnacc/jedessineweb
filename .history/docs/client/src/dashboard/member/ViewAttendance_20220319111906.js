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
    let roles = user.roles;
    let allRoles = roles.split(",");
    console.log(allRoles);
    let role = '';
    
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
                    <div className="w-full md:w-4/6 mx-auto  px-1 sm:py-3 sm:px-10 text-xs sm:text-sm tracking-wider">
                        <table className="w-full border-collapse border border-slate-400  rounded">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-left font-medium tracking-wider border border-slate-300 py-1">Month <span className="border-l border-l-2 pl-2">Week</span></th>
                                    <th scope="col" className="text-center border border-slate-300">1</th>
                                    <th scope="col" className="text-center border border-slate-300">2</th>
                                    <th scope="col" className="text-center border border-slate-300">3</th>
                                    <th scope="col" className="text-center border border-slate-300">4</th>
                                    <th scope="col" className="text-center border border-slate-300">5</th>
                                    <th scope="col" className="text-center border border-slate-300">%</th>
                                </tr>
                            </thead>
                            <tbody className="font-light">
                            <tr>
                                <th className="text-left border border-slate-300 font-medium tracking-wider py-1">January</th>
                                <td className="text-center text-green-400 border border-slate-300">
                                    <i class="fa-solid fa-square-check"></i>
                                </td>
                                <td className="text-center text-yellow-300 border border-slate-300">
                                    <i class="fa-solid fa-square-check"></i>
                                </td>
                                <td className="text-center text-green-400 border border-slate-300">
                                    <i class="fa-solid fa-square-check"></i>
                                </td>
                                <td className="text-center text-yellow-300 border border-slate-300">
                                    <i class="fa-solid fa-square-check"></i>
                                </td>
                                <td className="text-center text-red-400 border border-slate-300">
                                <i class="fa-solid fa-square-xmark"></i>
                                </td>
                                <td className="text-center border border-slate-300">
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