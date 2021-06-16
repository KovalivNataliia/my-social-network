import classNames from './Header.module.css'

const Header = () => {
    return (
        <header className={classNames.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMkgZKaUQa3PKL266EJBWeer9OBihLy1tKQ&usqp=CAU" alt="logo"></img>
        </header>
    );
}

export default Header