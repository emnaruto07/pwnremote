import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


export default function Navbar(){
    const { user } = useContext(AuthContext)

    return (
        <nav className='max-w-6xl mx-auto py-5 px-4 border-b border-gray-200'>
            <ul className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <li className='ml-3 text-gray-600'>
                        <Link className='hover:text-blue-600' to="/">Home</Link>
                    </li>
                    <li className='ml-3 text-gray-600'>
                        <Link className='hover:text-blue-600' to="/create-job">Post a Job</Link>
                    </li>
                </div>
                <div className='flex items-center'>
                    {user ? (
                        <li className='px-3 text-gray-600'>
                            <Link className='hover:text-blue-600' to="/logout">Logout</Link>
                        </li>
                    ):  (
                        <li className='px-3 text-gray-600'>
                            <Link className='hover:text-blue-600' to="/login">Login</Link>
                        </li>
                    )}
                </div>
               
                
            </ul>
        </nav>
    )
}
    
