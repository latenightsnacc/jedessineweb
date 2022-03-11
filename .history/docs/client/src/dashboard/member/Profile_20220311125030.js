import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import Axios from "axios";
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
    const [opacity, setOpacity] = useState('opacity-50');
    const [btnValue, setBtnValue] = useState('Edit');
    

    const editProfile = (e) => {
        e.preventDefault();
        if(e.target.value === 'Edit') {
            setBtnValue('Save');
           setOpacity('opacity-100');
        } else {
            setBtnValue('Edit');
           setOpacity('opacity-50');
        }
        
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
                cdsGroup={user.cdsGroup}
               />
               <div className="">
               <Spacer />
               </div>
               
               <Container>
                   <MemberMenu 
                   itemColor1={"text-gray-300"}
                   itemColor4={"text-green-500"}
                   itemColor2={"text-gray-300"}
                   itemColor3={"text-gray-300"}
                   />
                   
               </Container>
               <Spacer />
               <Container>
                    <MiniLayout>
                    <form className={`w-full md:w-4/6 mx-auto ${opacity}`}>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Full Name</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={`${user.firstname} ${user.surname}`}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Statecode</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={user.statecode}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">L.G.A</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={user.lga}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">C.D.S Group</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={user.cdsGroup}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                            <div className="absolute -top-3">
                            <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="P.P.A">
                                Place of Primary Assignment (P.P.A)
                            </label>
                            </div>
                            <input 
                            type={'text'}
                            name={'ppa'}
                            value={user.ppa}
                            
                            className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                            onChange={''}
                            />
                        </div>
                        <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                            <div className="absolute -top-3">
                            <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="phone_no">
                                Phone Number (Whatsapp)
                            </label>
                            </div>
                            <input 
                            type={'text'}
                            name={'phoneNo'}
                            value={user.phoneNo}
                            placeholder={'0812XXXXX89'}
                            className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                            onChange={''}
                            />
                            
                        </div>
                    <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                        <div className="absolute -top-3">
                            <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="email">
                                Email
                            </label>
                        </div>
                        <input 
                        type={'email'}
                        name={'email'}
                        value={user.email}
                        placeholder={'debs@example.com'}
                        className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                        onChange={''}
                        />
                            
                    </div>
                    <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-700 group-hover:text-green-500 text-xs font-bold" for="profile_pic">
                        Profile Picture
                    </label>
                    </div>
                    <input 
                    type={'file'}
                    name={'profilePic'}
                    
                    className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                    required />
                    
                </div>
                        <input type="button" 
                        value={btnValue}
                        onClick={editProfile}
                        className="w-full bg-green-300 text-white p-2 hover:bg-green-500 focus:ring-0 focus:outline-0' hover:shadow-lg"
                        />

                    </form>
                    </MiniLayout>
               </Container>
            </Layout>
            <Spacer />
            <Footer /> 
        </>
    )
}

export default ViewAttendance;