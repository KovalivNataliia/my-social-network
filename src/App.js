import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/MainPage/Profile/Profile';
import Messenger from './components/MainPage/Messenger/Messenger';
import News from './components/MainPage/News/News';
import Music from './components/MainPage/Music/Music';
import Settings from './components/MainPage/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar navbar={props.state.navbar}/>
        <div className="app-wrapper-content">
          {/* <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/> */}
          
          <Route path='/profile' render={() => <Profile profile={props.state.profile} />} />
          <Route path='/dialogs' render={() => <Messenger dialogs={props.state.dialogs} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
