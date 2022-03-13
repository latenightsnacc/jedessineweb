import Container from "../components/Container";

const Preview = () => {
    return(
        <Container>
            <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded my-4">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <ul className="text-xs md:text-sm w-full text-green-600 tracking-wide  py-2 px-2 leading-7 ">
                        <li >First name: <span className="text-gray-700 font-medium">Deborah Egonu</span> </li>
                        <li >Surname: Deborah Egonu </li>
                        <li >Batch: Deborah Egonu </li>
                        <li >Statecode: Deborah Egonu </li>
                        <li >Community Development Service (CDS) Group: Deborah Egonu </li>
                        <li >Local Government Area (LGA): Deborah Egonu </li>
                        <li >Place of Primary Assignment (PPA): Deborah Egonu </li>
                        <li >Phone Number (Whatsapp): Deborah Egonu </li>
                        <li >Email: Deborah Egonu </li>
                        <li >First name: Deborah Egonu </li>
                    </ul>
                </div>
            </div>
            
        </Container>
    )
}

export default Preview;