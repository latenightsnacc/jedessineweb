import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import DisplayDate from "./Date";
const Banner = (props) => {
    const {user} = useAuth();

    const navigate = useNavigate();
    return (
        <div className="container bg-green-500">
            <div className="text-white rounded shadow-sm py-5 px-5">
                <div className="font-semibold text-xl md:text-3xl">
                    <span className="font-light">Welcome back,</span> <br/>{props.position}</div>
                    <span>C.D.S Group: {user.cdsGroup}</span>
                    <DisplayDate />
                <div className="hover:cursor-pointer" onClick={() => { navigate("../dashboard/member")}}>
                    <span className="text-sm  text-white no-underline ">&larr; Back to my profile</span> 
                </div>       
            </div>
    </div>
    )
}
export default Banner;