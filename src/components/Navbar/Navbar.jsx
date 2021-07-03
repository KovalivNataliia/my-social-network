import classNames from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {

    let navElements = props.store.getState().navbar.navElements;

    let navElement = navElements.map(element => {
        return (
            <li>
                <NavLink to={element.link} activeClassName={classNames.active}><img src={element.icon} alt="#" /> {element.name}</NavLink>
            </li>
        );
    })

    return (
        <nav className={classNames.nav}>
            <ul>
                {navElement}
            </ul>
        </nav>
    );
}

export default Navbar