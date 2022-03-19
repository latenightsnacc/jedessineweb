import Container from "./Container"
import DisplayDate from "./Date";

const CorperBanner = (props) => {
    return(
        <Container>
            <div className="flex flex-row items-center justify-center">
                <div className="w-2/6 lg:w-1/6">
                        <img 
                        className="rounded-full" 
                        src={props.profilePic} 
                        alt={props.altText} />
                </div>
                <div className="ml-5 md:ml-10 tracking-wider">
                    <h1 className="leading-7 font-medium  md:text-2xl mb-1">Hello, {props.firstname} </h1>
                    <div className="flex flex-col text-xs text-gray-700 md:text-sm lg:text-base">
                        <span className="font-medium">Statecode: {props.statecode}</span>
                        <span className="my-1 font-medium text-green-500">CDS Group: {props.cdsGroup}</span>
                        <span className="mb-1 font-medium text-gray-400">Role: {props.roles}</span>
                        <Date />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CorperBanner;