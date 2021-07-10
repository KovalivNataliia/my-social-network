import Navbar from './Navbar'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        navElements: state.navbar.navElements
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer