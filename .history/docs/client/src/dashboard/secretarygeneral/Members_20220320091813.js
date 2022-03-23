import Spacer from "../../components/Spacer";
import PageTitle from "../../components/PageTitle";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Members = () => {
    return(
        <>
            <Navbar />
            <Spacer />
            
            <PageTitle title={"List of "} />
            
                <Spacer />
                <Table />  
            
            <Footer />
        </>
    )
                
}

export default Members;