
const CorperBanner = (props) => {
    return(
        <Container>
            <div className="flex flex-row items-center justify-center">
                <div className="w-2/6 lg:w-1/6">
                        <img 
                        className="rounded-full" 
                        src={'ProfilePic'} 
                        alt={"Deborah Egonu"} />
                </div>
                <div className="ml-5 md:ml-10 ">
                    <h1 className="leading-7 font-medium  md:text-2xl mb-1">Hello, {user.firstname} </h1>
                    <div className="flex flex-col text-xs text-gray-700 md:text-sm lg:text-base">
                        <span className="font-medium">Statecode: {user.surname}</span>
                        <span className="my-1 font-medium text-green-500">CDS Group: {user.cdsGroup}</span>
                        <span className="mb-1 font-medium text-gray-400">Role: {user.roles}</span>
                        <span className="text-xs font-medium text-gray-400  md:text-sm">{(new Date()).toLocaleDateString('en-US',{
                            weekday: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            month: 'short'
                        })}</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}