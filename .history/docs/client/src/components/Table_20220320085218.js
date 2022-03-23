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
        <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                    <thead>
                            <tr class="h-8">
                                <th scope="col" class="text-left w-auto">No.</th>
                                <th scope="col" class="text-left w-auto">Profile</th>
                                <th scope="col" class="text-left hidden md:table-cell">Name</th>
                                <th scope="col" class="text-left">Statecode</th>
                                <th scope="col" class="text-left">Batch</th>
                                <th scope="col" class="text-left  hidden md:table-cell">Role</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> L.G.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> P.P.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Contact</th>
                                
                            </tr>
                    </thead>
                    <tbody>
                        {list.map(val => {
                            return (
                                <tr className='border-collapse border-grayodd:bg-white even:bg-slate-100 hover:bg-white hover:text-green-500' key={val.id}>
                                    <td>{count++}</td>
                                    <td>
                                        <div className='w-24 h-24'>
                                            <img className='rounded-full w-full' src={`${val.profilePic}`} alt={val.name} />
                                        </div>
                                         
                                    </td>
                                    <td>{val.surname} {val.firstname}</td>
                                    <td>{val.statecode}</td>
                                    <td>{val.batch}</td>
                                    <td>Member</td>
                                    <td>{val.lga}</td>
                                    <td>{val.ppa}</td>
                                    <td>{val.phone}</td>
                                </tr>
                            )
                            
                        })}
                    </tbody>
                </table>
    );
}

export default Table