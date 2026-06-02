import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <NavLink to="/login" className="Navigation-login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup" className="Navigation-signup">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
