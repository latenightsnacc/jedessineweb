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
                <
            }
          </div>
          <Footer />
        </Container>
        <Preview 
            firstname={corper.firstname}
            surname={corper.surname}
            batch={corper.batch}
            email={corper.email}
            statecode={corper.statecode}
            phoneNo={corper.phoneNo}
            cdsGroup={corper.cdsGroup}
            lga={corper.lga}
            ppa={corper.ppa}
        />
      </Layout>
      
    </>
  )
}

export default Register;