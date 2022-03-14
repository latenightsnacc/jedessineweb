const RegisterForm = (props) => {
    return(
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
                        value={props.firstname}
                        className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                        placeholder={'Deborah'}
                        onChange={props.onChange}
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
                    value={props.surname}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    placeholder={'Egonu'}
                    onChange={props.onChange}
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
                    value={props.batch}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 uppercase'}
                    placeholder={'2021 A'}
                    onChange={props.onChange}
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
                    value={props.statecode}
                    placeholder={'EN/21A/0324'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 uppercase'}
                    onChange={props.onChange}
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
                    onChange={props.onChange}
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
                    value={props.lga}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    placeholder={'Enugu North'}
                    onChange={props.onChange}
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
                    value={props.ppa}
                    placeholder={'Digital Dreams Ltd'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={props.onChange}
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
                    value={props.phoneNo}
                    placeholder={'0812XXXXX89'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={props.onChange}
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
                    value={props.email}
                    placeholder={'debs@example.com'}
                    className={'border-0 text-xs md:text-sm w-full text-gray-900  py-2 px-2 leading-loose font-medium tracking-widest focus:ring-0 focus:outline-0 text-uppercase'}
                    onChange={props.onChange}
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
                    onChange={props.file}
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
    )
}
export default RegisterForm;