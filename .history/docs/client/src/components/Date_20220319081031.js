const DisplayDate = () => {
    return(
        <span className="text-xs font-medium text-gray-400  md:text-sm">{(new Date()).toLocaleDateString('en-US',{
            weekday: 'long',
            day: 'numeric',
            year: 'numeric',
            month: 'short'
        })}</span>
    )
}

export default DisplayDate;