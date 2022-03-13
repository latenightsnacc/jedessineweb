import Container from "../components/Container";

const Preview = () => {
    return(
        <Container>
            <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded my-4">
                <div className="w-2/6 mx-auto">
                    <img className="rounded-full" src="../../uploads/image-1647101312469.png" alt="Deborah Egonu" />
                </div>
                <div>
                    <ul className="text-xs text-center md:text-sm w-full text-green-600 tracking-wide  py-2 px-2 leading-7 ">
                        <li >First Name: <span className="text-gray-700 font-medium">Deborah Egonu</span> </li>
                        <li >Surname:  </li>
                        <li >Batch:  </li>
                        <li >Statecode:  </li>
                        <li >Community Development Service (CDS) Group:  </li>
                        <li >Local Government Area (LGA):  </li>
                        <li >Place of Primary Assignment (PPA):  </li>
                        <li >Phone Number (Whatsapp):  </li>
                        <li >Email:  </li>
                        <li >First name:  </li>
                    </ul>
                </div>
            </div>
            
        </Container>
    )
}

export default Preview;