import Container from "../components/Container";

const Preview = () => {
    return(
        <Container>
            <div className="w-full max-w-lg mx-auto bg-white py-10 shadow-lg rounded my-4">
                <div className="text-center  mb-6">
                    <span className="text-green-500 font-semibold capitalize">CDS E-attendance</span>
                    <h1 className="text-black font-medium leading-loose text-xl uppercase tracking-wide">CREATE PROFILE</h1>
                    <span></span>
                </div>
                <div className="w-2/6 mx-auto py-3">
                    <img className="rounded-full" src="../../uploads/image-1647101312469.png" alt="Deborah Egonu" />
                </div>
                <div className="w-3/4 mx-auto">
                    <ul className="text-xs text-center w-full md:text-sm w-full text-green-600 tracking-wide  pt-2 pb-4 px-2 leading-7 ">
                        <li >First Name: <span className="text-gray-700 font-medium">Deborah</span> </li>
                        <li >Surname: <span className="text-gray-700 font-medium">Egonu</span> </li>
                        <li >Batch: <span className="text-gray-700 font-medium">2021 A</span> </li>
                        <li >Statecode: <span className="text-gray-700 font-medium">EN/21A/0324</span> </li>
                        
                        <li >Local Government Area (LGA): <span className="text-gray-700 font-medium">Enugu North</span> </li>
                        
                        <li >Phone Number (Whatsapp): <span className="text-gray-700 font-medium">08125018789</span> </li>
                        <li >Email: <span className="text-gray-700 font-medium">deborah.o.egonu@gmail.com</span> </li>
                        <li >Place of Primary Assignment (PPA): <span className="text-gray-700 font-medium">Digital Dreams Limited</span> </li>
                        <li >Community Development Service (CDS) Group: <span className="text-gray-700 font-medium">Information Communication Technology (ICT)</span> </li>
                    </ul>

                    <div className=" w-full flex flex-col items-center justify-center">
                        <div className=" w-full flex  justify-center"><input type={"checkbox"}  />
                        <span>I have previwed </span></div>
                        
                            <button 
                        onClick={'createProfile'}
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline">
                        Create Profile
                        </button>
                        </div>
                    
                </div>
            </div>
            
        </Container>
    )
}

export default Preview;