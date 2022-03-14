import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';
import Footer from "../components/Footer";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Preview from "./Preview";


const Register = () => {
    
    const initialCorperState = {
        firstname: "",
        surname: "",
        batch:"",
        statecode:"",
        cdsGroup:"",
        lga:"",
        ppa:"",
        phoneNo:"",
        email:"",
        profilePic:"",
        profilePicName:"",
        roles: "Member",
        status: "Active",
        state:"Enugu"
    }

    const [corper, setCorper] = useState(initialCorperState);

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name, value } = event.target;
        setCorper({...corper, [name]: value});
    }
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
 
    const createProfile = (e) => {
        e.preventDefault();
        const formData = new FormData();
        
    formData.append('firstname', corper.firstname);
    formData.append('surname', corper.surname);
    formData.append('email', corper.email);
    formData.append('phoneNo', corper.phoneNo);
    formData.append('state', 'Enugu');
    formData.append('statecode', corper.statecode);
    formData.append('batch', corper.batch);
    formData.append('cdsGroup', corper.cdsGroup);
    formData.append('lga', corper.lga);
    formData.append('ppa', corper.ppa);
    formData.append('roles', 'Member');
    formData.append('status', 'Active');
    formData.append('image', file);
    formData.append('fileName', fileName);
     
        
        console.log(formData.get('firstname')); 
        try{
            Axios.post("http://localhost:4000/api/auth/signup",formData, {
                headers: {"Content-Type": "multipart/form-data"}
              })
            .then(response => {
                setCorper({
                    firstname: response.data.firstname,
                    surname: response.data.surname,
                    batch: response.data.batch,
                    statecode: response.data.statecode,
                    cdsGroup: response.data.cdsGroup,
                    lga: response.data.lga,
                    ppa: response.data.ppa,
                    phoneNo: response.data.phoneNo,
                    email: response.data.email,
                    profilePic: response.data.profilePic,
                    roles: response.data.roles,
                    status: response.data.status,
                    state: response.data.state
                });
            })
            .then(() => {
                setSubmitted(true);
                console.log('Submitted successfully!');
            })
            .catch(e => {
                console.log(e);
            }) 
        }catch(e){
            console.log(e);
        };
    }
  return(
    <>
      <Layout>
        <Container>
          <div className="flex flex-col items-center justify-center tracking-widest">
            <div className="text-center  mt-10 mb-6">
            <span className="text-green-500 font-semibold capitalize">CDS E-attendance</span>
              <h1 className="text-black font-medium leading-loose text-2xl uppercase tracking-wide">create profile</h1>
            </div>
           { submitted ? 
           <div className="flex flex-col items-center text-center my-3">
               <h2 className="text-green-500 font-meidum text-2xl tracking-widest">Profile created successfully!</h2>
               <Link to={'/api/auth/signin'}>
                    <button>Login</button>
               </Link>
           </div> : 
            <div className="w-full max-w-lg">
              <form className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <div className={`relative group py-2 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400`}>
                        <div className="absolute -top-3">
                            <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                                First Name
                            </label>
                        </div>
                        <input 
                        type={'text'}
                        name={'firstname'}
                        value={corper.firstname}
                        className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                        placeholder={'Deborah'}
                        onChange={handleInputChange}
                         />
                    </div>
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Surname
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'surname'}
                    value={corper.surname}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    placeholder={'Egonu'}
                    onChange={handleInputChange}
                     />
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Batch
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'batch'}
                    value={corper.batch}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 uppercase'}
                    placeholder={'2021 A'}
                    onChange={handleInputChange}
                     />
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Statecode
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'statecode'}
                    value={corper.statecode}
                    placeholder={'EN/21A/0324'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 uppercase'}
                    onChange={handleInputChange}
                     />
                    
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        C.D.S Group
                    </label>
                    </div>
                    <select 
                    type={'text'}
                    name={'cdsGroup'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                     >
                        <option value={''}>Select CDS Group</option>
                        <option value={'ICT'}>Information Communication Technology (ICT)</option>
                        <option value={'Band'}>Band</option>
                    </select>
                    
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Local Government Area (L.G.A)
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'lga'}
                    value={corper.lga}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    placeholder={'Enugu North'}
                    onChange={handleInputChange}
                     />
                    
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Place of Primary Assignment (P.P.A)
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'ppa'}
                    value={corper.ppa}
                    placeholder={'Digital Dreams Ltd'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                     />
                    
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Phone Number (Whatsapp)
                    </label>
                    </div>
                    <input 
                    type={'text'}
                    name={'phoneNo'}
                    value={corper.phoneNo}
                    placeholder={'0812XXXXX89'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                     />
                    
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Email
                    </label>
                    </div>
                    <input 
                    type={'email'}
                    name={'email'}
                    value={corper.email}
                    placeholder={'debs@example.com'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={handleInputChange}
                     />
                    
                </div>
                <div className="relative group py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                    <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-gray-900 group-hover:text-green-500 text-xs font-normal tracking-widest">
                        Profile Picture
                    </label>
                    </div>
                    <input 
                    type="file"
                    name="image"
                    id="image"
                    onChange={saveFile}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    required />
                    
                </div>
                
                
                <div className="flex w-full flex-col">
                  <button 
                  onClick={createProfile}
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-normal tracking-widest py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                   Create Profile
                  </button>

                  <div className="inline-block mt-2 align-baseline text-xs md:text-sm text-gray-500  text-center">
                    Already have a profile? 
           
                    <Link to={"/api/auth/signin"}>
                        <span className="text-green-400 ml-1 cursor-pointer text-underline font-normal tracking-widest">Login</span>
                    </Link>
                    
                  </div>
                </div>
              </form>
              
              </div>
            }
          </div>
          <Footer />
        </Container>
        <Preview 
            firstname={corper.firstname}
            surname={corper.firstname}
            batch={corper.firstname}
            email={corper.firstname}
            statecode={corper.firstname}
            phoneNo={corper.firstname}
            cdsGroup={corper.firstname}
        />
      </Layout>
      
    </>
  )
}

export default Register;