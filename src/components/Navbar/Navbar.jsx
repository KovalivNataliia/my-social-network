import classNames from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classNames.nav}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={classNames.active}><img src="https://img.icons8.com/bubbles/2x/test-account.png" alt="#" /> Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={classNames.active}><img src="https://img.icons8.com/bubbles/2x/important-mail.png" alt="#" /> Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={classNames.active}><img src="https://img.icons8.com/bubbles/2x/america.png" alt="#" /> News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={classNames.active}><img src="https://img.icons8.com/bubbles/2x/musical-notes.png" alt="#" /> Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={classNames.active}><img src="https://img.icons8.com/bubbles/2x/gears.png" alt="#" /> Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar