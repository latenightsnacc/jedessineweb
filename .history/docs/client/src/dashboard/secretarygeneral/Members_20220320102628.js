import Spacer from "../../components/Spacer";
import PageTitle from "../../components/PageTitle";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { useAuth } from "../../context/useAuth";
const Members = () => {
    const {user} = useAuth();
    const cds = user.cdsGroup;
    return(
        <>
            <Navbar />
            <Spacer />
            <Container>
            <PageTitle title={`List of ${cds} Members`} />
            </Container>
            <Spacer />
            <Container>
        
            </Container>
                  
            
            <Footer />
        </>
    )
                
}

export default Members;