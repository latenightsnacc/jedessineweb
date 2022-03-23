import Spacer from "../../components/Spacer";
import PageTitle from "../../components/PageTitle";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/useAuth";
const Members = () => {
    const {user} = useAuth();
    const cds = user.cdsGroup;
    return(
        <>
            <Navbar />
            <Spacer />
            
            <PageTitle title={`List of ${cds} Members`} />
            
                <Spacer />
                <Table />  
            
            <Footer />
        </>
    )
                
}

export default Members;