import Container from "./Container"
import DisplayDate from "./Date";
import { Link } from "react-router-dom";

const CorperBanner = (props) => {
    return(
        <Container>
            <div className="flex flex-row items-center justify-center">
                <div className="w-2/6 lg:w-1/6">
                    <img 
                        className="rounded-full" 
                        src={props.profilePic} 
                        alt={props.altText} 
                    />
                </div>
                <div className="ml-5 md:ml-10 tracking-wider">
                    <h1 className="leading-7 font-medium text-sm md:text-2xl md:mb-1">Hello, {props.firstname} </h1>
                    <div className="flex flex-col text-gray-700 text-xs sm:text-sm lg:text-base">
                        <span className="font-medium">Statecode: {props.statecode}</span>
                        <span className="my-1 font-medium text-green-500">CDS Group: {props.cdsGroup}</span>
                        <div className="mb-1 font-medium text-gray-400">
                            <span>Role:  {props.role}</span><br/>
                            <Link to={props.link}>
                            <span className="text-green-500 underline cursor-pointer">{props.excoRole}</span>
                            </Link>
                            
                            </div>
                        <DisplayDate />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CorperBanner;