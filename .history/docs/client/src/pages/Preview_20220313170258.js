import Container from "../components/Container";

const Preview = () => {
    const showAlert = e => {
        const preview = document.getElementById('preview');
        let display;
        if(preview){
            display = 'hidden';
        } else {
            display = 'block';
        }
    }
    return(
        <Container>
            <div className="w-3/6 mx-auto bg-white py-10 shadow-lg rounded my-4">
                <div className="text-center  mb-6">
                    <span className="text-green-500 font-semibold capitalize">CDS E-attendance</span>
                    <h1 className="text-black font-medium leading-loose text-xl uppercase tracking-wide">CREATE PROFILE</h1>
                    <span></span>
                </div>
                <div className="w-1/6 mx-auto py-3">
                    <img className="rounded-full" src="../../uploads/image-1647101312469.png" alt="Deborah Egonu" />
                </div>
                <div className="w-3/4 mx-auto">
                    <ul className="text-xs text-center w-full md:text-sm w-full text-green-600 tracking-widest  pt-2 pb-4 px-2 leading-10 ">
                        <li >First Name: <span className="text-gray-700 font-medium leading-10">Deborah</span> </li>
                        <li >Surname: <span className="text-gray-700 font-medium leading-10">Egonu</span> </li>
                        <li >Batch: <span className="text-gray-700 font-medium leading-10">2021 A</span> </li>
                        <li >L.G.A: <span className="text-gray-700 font-medium leading-10">Enugu North</span> </li>
                        <li >Statecode: <span className="text-gray-700 font-medium leading-10">EN/21A/0324</span> </li>
                        <li >Email: <span className="text-gray-700 font-medium leading-10">deborah.o.egonu@gmail.com</span> </li>
                        <li >Phone Number (Whatsapp): <span className="text-gray-700 font-medium leading-10">08125018789</span> </li>
                        
                        <li > C.D.S Group: <span className="text-gray-700 font-medium leading-10">Information Communication Technology (ICT)</span> </li>
                        <li >Place of Primary Assignment (PPA): <span className="text-gray-700 font-medium leading-10">Digital Dreams Limited</span> </li>
                    </ul>

                    <div className={`w-full flex flex-col items-center justify-center ${di}`}>
                    <div className="mb-1 text-red-400 text-xs font-medium">
                        <span>Please confirm by checking the box below!</span>
                        </div>
                        <div className=" w-full flex text-xs items-center justify-center tracking-widest">
                            <input type={"checkbox"} id={'preview'} className={"checked:bg-green-500 "}  />
                            <span className="ml-2 text-sm">I have cofirmed that my details above are correct.</span>
                        </div>
                        
                        <button 
                        onClick={'createProfile'}
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
                        Create Profile
                        </button>
                        </div>
                    
                </div>
            </div>
            
        </Container>
    )
}

export default Preview;