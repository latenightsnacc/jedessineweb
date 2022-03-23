import Container from "./Container";
const PageTitle = (props) => {
    return(
        <Container>
            <h1 className="text-gray-800 capitalize font-semibold md:text-2xl">{props.title}</h1>
        </Container>
    )
}
export default PageTitle;