import { useEffect, useState } from 'react';
import Axios from 'axios';
import NoImage from '../../public/uploads/NoImage.png';
import { useAuth } from '../context/useAuth';
const Table = () => {
    const {user} = useAuth();
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        
            Axios.get(`http://localhost:4000/members`)
            .then(Response => {
                setList(Response.data)
            })
            .catch (error => {
                console.error("Error fetching data:", error);
                setError(error);
            })
            .finally( () => setLoading(false));
        
    }, [])
    console.log(user);
    console.log(list);
    if (loading) return 'Loading';
    if (error) return 'error';
let count = 1;
    return (
        <div className="w-full  mx-auto  px-1 sm:py-3  text-xs sm:text-sm tracking-wider">
            <table className="border-collapse border border-slate-400 table-hover text-xs md:text-sm bg-white rounded">
            <thead>
                    <tr className="h-8">
                        <th scope="col" className="text-left px-2  border border-slate-300 w-auto">No.</th>
                        <th scope="col" className="text-left px-2 border border-slate-300 w-auto">Profile</th>
                        <th scope="col" className="text-left px-2 border border-slate-300 hidden md:table-cell">Name</th>
                        <th scope="col" className="text-left px-2 border border-slate-300">Statecode</th>
                        <th scope="col" className="text-left px-2 border border-slate-300">Batch</th>
                        <th scope="col" className="text-left px-2 border border-slate-300  hidden md:table-cell">Role</th>
                        <th scope="col" className="text-left px-2 border border-slate-300  hidden md:table-cell"> L.G.A</th>
                        <th scope="col" className="text-left px-2 border border-slate-300  hidden md:table-cell"> P.P.A</th>
                        <th scope="col" className="text-left px-2 border border-slate-300  hidden md:table-cell"> Contact</th>
                        
                    </tr>
            </thead>
            <tbody>
                {list.map(val => {
                    return (
                        <tr key={val.id}>
                            <td className='border border-slate-300 text-center'>{count++}</td>
                            <td className='border border-slate-300'>
                                <div className='w-20 h-20 p-3'>
                                    <img className='rounded-full w-full' src={val.profilePic ? ${val.profilePic}`} :} alt={val.name} />
                                </div>
                                    
                            </td>
                            <td className='border border-slate-300 px-2'>{val.surname} {val.firstname}</td>
                            <td className='border border-slate-300 px-2'>{val.statecode}</td>
                            <td className='border border-slate-300 px-2'>{val.batch}</td>
                            <td className='border border-slate-300 px-2'>{val.roles}</td>
                            <td className='border border-slate-300 px-2'>{val.lga}</td>
                            <td className='border border-slate-300 px-2'>{val.ppa}</td>
                            <td className='border border-slate-300 px-2'>{val.phoneNo}</td>
                        </tr>
                    )
                    
                })}
            </tbody>
        </table>
        </div>
        
    );
}

export default Table