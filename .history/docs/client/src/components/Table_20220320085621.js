import { useEffect, useState } from 'react';
import Axios from 'axios';
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
        <table className="border-collapse border border-slate-400 table-hover text-xs md:text-sm bg-white rounded">
                    <thead>
                            <tr className="h-8">
                                <th scope="col" className="text-left w-auto">No.</th>
                                <th scope="col" className="text-left w-auto">Profile</th>
                                <th scope="col" className="text-left hidden md:table-cell">Name</th>
                                <th scope="col" className="text-left">Statecode</th>
                                <th scope="col" className="text-left">Batch</th>
                                <th scope="col" className="text-left  hidden md:table-cell">Role</th>
                                <th scope="col" className="text-left  hidden md:table-cell"> L.G.A</th>
                                <th scope="col" className="text-left  hidden md:table-cell"> P.P.A</th>
                                <th scope="col" className="text-left  hidden md:table-cell"> Contact</th>
                                
                            </tr>
                    </thead>
                    <tbody>
                        {list.map(val => {
                            return (
                                <tr key={val.id}>
                                    <td className='border border-slate-300'>{count++}</td>
                                    <td className='border border-slate-300'>
                                        <div className='w-20 h-20'>
                                            <img className='rounded-full w-full' src={`${val.profilePic}`} alt={val.name} />
                                        </div>
                                         
                                    </td>
                                    <td className='border border-slate-300'>{val.surname} {val.firstname}</td>
                                    <td className='border border-slate-300'>{val.statecode}</td>
                                    <td className='border border-slate-300'>{val.batch}</td>
                                    <td className='border border-slate-300'>{val.roles}</td>
                                    <td className='border border-slate-300'>{val.lga}</td>
                                    <td className='border border-slate-300'>{val.ppa}</td>
                                    <td className='border border-slate-300'>{val.phone}</td>
                                </tr>
                            )
                            
                        })}
                    </tbody>
                </table>
    );
}

export default Table