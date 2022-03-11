import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {userAu}
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
                            value={'Deborah Onyebuchi Olisa Egonu'}
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
                            value={'EN/21A/0324'}
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
                            value={'Enugu Norrth'}
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
                            value={'Information Comunication Technology (I.C.T)'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Place of Primary Assignment</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'P.P.A'}
                            value={'Digital Dreams Ltd'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Phone (Whatsapp)</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={'08125018789'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Email</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Email'}
                            value={'egonubuchi97@gmail.com'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
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