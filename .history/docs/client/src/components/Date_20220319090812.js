const DisplayDate = () => {
    return(
        <span className="font-medium text-gray-400  text-sm">{(new Date()).toLocaleDateString('en-US',{
            weekday: 'long',
            day: 'numeric',
            year: 'numeric',
            month: 'short'
        })}</span>
    )
}

export default DisplayDate;