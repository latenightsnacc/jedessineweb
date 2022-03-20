import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
const Banner = (props) => {
    const {user} = useAuth();

    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="bg-green-500">
            <div className="text-white rounded shadow-sm py-5 px-5">
                <div className="font-semibold text-xl md:text-3xl">
                    <span className="font-light">Welcome back,</span> <br/>{props.position}</div>
                    <div className="text-sm mt-1 font-medium">C.D.S Group: {user.cdsGroup}</div>
                    
                <div className="hover:cursor-pointer" onClick={() => { navigate("../dashboard/member")}}>
                    <span className="text-xs sm:text-sm text-white no-underline ">&larr; Back to my profile</span> 
                </div>       
            </div>
            </div>
            
    </div>
    )
}
export default Banner;