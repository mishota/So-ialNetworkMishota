import './App.css';
import react from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <Dialogs
            store={props.store}
          // dialogs={props.state.messagesPage.dialogs}
          // messages={props.state.messagesPage.messages}
          />}
        /> 
        <Route path='/profile'
          render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />}
        />


      </div>
    </div>

  );
}

export default App;
