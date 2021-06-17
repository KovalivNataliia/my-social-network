import classNames from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classNames.nav}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={classNames.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={classNames.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={classNames.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={classNames.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={classNames.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar