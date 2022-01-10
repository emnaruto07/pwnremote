import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { API } from '../api';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';


export default function Navbar(){
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmit(){
        axios.post(API.auth.logout)
        .then(res => {
            logout()
            navigate("/login")
        })
       
    }

    return (
        <nav className='max-w-6xl mx-auto py-5 px-4 border-b border-gray-200'>
            <ul className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <li className='ml-3 text-gray-600'>
                        <Link className='hover:text-blue-600' to="/">Jobs</Link>
                    </li>
                    
                    <li className='ml-3 text-gray-600'>
                        <Link className='hover:text-blue-600' to="/create-job">Post a Job</Link>
                    </li>
                </div>
                <div className='text-center text-4xl font-bold text-red-600'>
                    uid=0(pwnremote)
                </div>
                <div className='flex items-center'>
                    {user ? (
                        <div className='flex items-center'>
                            <li className='px-3 text-gray-600'>
                                <Link className='hover:text-blue-600' to="#">Hi {user.id},</Link>
                            </li>
                            <li className='px-3 text-gray-600'>
                                <button className='hover:text-blue-600' onClick={handleSubmit}>Logout</button>
                            </li>
                        </div>
                    ):  (
                        <div className='flex items-center'>
                        <li className='px-3 text-gray-600'>
                            <Link className='hover:text-blue-600' to="/login">Login</Link>
                        </li>
                        <li className='px-3 text-gray-600'>
                            <Link className='hover:text-blue-600' to="/signup">Signup</Link>
                        </li>
                        </div>
                       
                    )}
                </div>
               
                
            </ul>
        </nav>
    )
}


// export default function Navbar(){

//     return (
//         <div>
//             <header class="text-gray-600 body-font">
//             <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                 <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                 </svg>
//                 <span class="ml-3 text-xl">Tailblocks</span>
//                 </a>
//                 <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//                 <a class="mr-5 hover:text-gray-900">First Link</a>
//                 <a class="mr-5 hover:text-gray-900">Second Link</a>
//                 <a class="mr-5 hover:text-gray-900">Third Link</a>
//                 <a class="mr-5 hover:text-gray-900">Fourth Link</a>
//                 </nav>
//                 <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//                 </button>
//             </div>
//             </header>
//         </div>
//     )

// }