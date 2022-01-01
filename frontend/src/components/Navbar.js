import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


export default function Navbar(){
    const { user } = useContext(AuthContext)

    return (
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/create-job">Post a Job</Link>
                </li>
                {user ? (
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                ):  (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                
            </ul>
        </nav>
    )
}
    
