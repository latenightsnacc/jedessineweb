import {Link}  from "react-router-dom";
import Spacer from "../../components/Spacer";
import PageTitle from "../"
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Members = () => {
    return(
        <>
            <Navbar />
            <Spacer />
            <Spacer />
            <PageTitle title={"New Note"} />
            <Spacer />
                <Spacer />
                <Table />  
            </div>
            <Footer />
        </>
    )
                
}

export default Members;