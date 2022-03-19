const AttendanceNotification = (props) => {
    return(
        <div className="w-full md:w-4/6 mx-auto shadow rounded py-3 p-10 text-sm tracking-wider my-3">
            <span className="text-gray-400">Wednesday, 22nd March 2022</span>
            <div className="mt-2">
                <div className="my-2">{props.titleLabel}: <span className="text-gray-800 font-semibold">{props.title}</span></div>
                <div >{props.statusLabel}: <span className="text-green-500 font-semibold">{props.status}</span></div>
            </div>
        </div>
    )
}

export default Notification;