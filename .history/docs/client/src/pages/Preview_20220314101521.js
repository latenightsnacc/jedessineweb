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
            <div className="w-3/4 mx-auto tracking-widest">
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        First Name
                    </label>
                </div>
                <input 
                type={'text'}
                
                value={props.firstname}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        Surname
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.surname}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        Batch
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.batch}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        Statecode
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.statecode}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        L.G.A
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.lga}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        CDS Group
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.cdsGroup}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        P.P.A
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.ppa}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        Email
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.email}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                <div className={`relative group py-2 rounded text-sm w-full border border-1 border-white  appearance-none rounded  my-2`}>
                <div className="absolute -top-3">
                    <label className="inline px-2 bg-white text-green-500 text-xs font-normal tracking-widest">
                        Phone Number (Whatsapp)
                    </label>
                </div>
                <input 
                type={'text'}
                value={props.phoneNo}
                className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    />
                </div>
                

                <div className={`w-full flex flex-col items-center justify-center tracking-widest `}>
                    <div className={`mb-1 text-red-400 text-xs font-medium ${display}`}>
                        <span>Please confirm by checking the box below!</span>
                    </div>
                    <div className=" w-full flex text-xs items-center justify-start mt-1">
                        <input type={"checkbox"} id={'preview'} className={"checked:bg-green-500 "}  />
                        <span className="ml-2 text-xs">My details above are 100% accurate.</span>
                    </div>
                    <button 
                        onClick={'createProfile'}
                        type="submit"
                        className="bg-green-500 block w-full hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline tracking-widest">
                        Create Profile
                        </button>
                </div>
                
            </div>
        </div>
        
    )
}

export default Preview;