const DisplayDate = () => {
    return(
        <span className="font-medium text-gray-300  text-sm">{(new Date()).toLocaleDateString('en-US',{
            weekday: 'long',
            day: 'numeric',
            year: 'numeric',
            month: 'short'
        })}</span>
    )
}

export default DisplayDate;