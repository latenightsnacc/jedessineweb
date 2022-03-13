import Container from "../components/Container";

const Preview = () => {
    return(
        <Container>
            <div className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <ul className="text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium">
                        <li >First name: Deborah Egonu </li>
                    </ul>
                </div>
            </div>
            
        </Container>
    )
}

export default Preview;