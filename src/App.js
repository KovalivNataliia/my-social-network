import './App.css';
import Header from './components/Header/Header';
import Profile from './components/MainPage/Profile/Profile';
import Messenger from './components/MainPage/Messenger/Messenger';
import News from './components/MainPage/News/News';
import Music from './components/MainPage/Music/Music';
import Settings from './components/MainPage/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/MainPage/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          {/* <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/> */}
          
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/dialogs' render={() => <Messenger />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
