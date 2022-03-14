import Container from "../components/Container";

const Preview = (props) => {
    let display = 'hidden';
    const showAlert = e => {
        const preview = document.getElementById('preview');
        
        if(e.target.checked){
            display = 'hidden';
        } else {
            display = 'block';
        }
    }
    return(
        <div className="w-full mx-auto bg-white py-10 shadow-lg rounded my-4">
                <div className="w-1/6 mx-auto py-3">
                    <img className="rounded-full" src={props.image} alt={props.altText} />
                </div>
                <div className="w-3/4 mx-auto">
                    <ul className="text-xs text-center w-full md:text-sm w-full text-green-600 tracking-widest  pt-2 pb-4 px-2 leading-10 ">
                        <li >First Name: <span className="text-gray-700 font-medium leading-10">{props.firstname}</span> </li>
                        <li >Surname: <span className="text-gray-700 font-medium leading-10">{props.surname}</span> </li>
                        <li >Batch: <span className="text-gray-700 font-medium leading-10">{props.batch}</span> </li>
                        <li >L.G.A: <span className="text-gray-700 font-medium leading-10">{props.lga}</span> </li>
                        <li >Statecode: <span className="text-gray-700 font-medium leading-10">{props.statecode}</span> </li>
                        <li >Email: <span className="text-gray-700 font-medium leading-10">{props.email}</span> </li>
                        <li >Phone Number (Whatsapp): <span className="text-gray-700 font-medium leading-10">{props.phoneNo}</span> </li>
                        
                        <li > C.D.S Group: <span className="text-gray-700 font-medium leading-10">{props.cdsGroup}</span> </li>
                        <li >Place of Primary Assignment (PPA): <span className="text-gray-700 font-medium leading-10">{props.ppa}</span> </li>
                    </ul>

                    <div className={`w-full flex flex-col items-center justify-center tracking-widest `}>
                    <div className={`mb-1 text-red-400 text-xs font-medium ${display}`}>
                        <span>Please confirm by checking the box below!</span>
                        </div>
                        <div className=" w-full flex text-xs items-center justify-center ">
                            <input type={"checkbox"} id={'preview'} className={"checked:bg-green-500 "}  />
                            <span className="ml-2 text-c">I have cofirmed that my details above are correct.</span>
                        </div>
                        
                        <button 
                        onClick={'createProfile'}
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline tracking-widest">
                        Create Profile
                        </button>
                        </div>
                    
                </div>
            </div>
    )
}

export default Preview;