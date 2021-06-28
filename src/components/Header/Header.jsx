import classNames from './Header.module.css'

const Header = () => {
    return (
        <header className={classNames.header}>
            <img src="https://img.icons8.com/clouds/2x/sent.png" alt="logo"></img>
        </header>
    );
}

export default Header