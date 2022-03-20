import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
const Banner = (props) => {
    const {user} = useAuth();

    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="bg-green-500">

            </div>
            
    </div>
    )
}
export default Banner;