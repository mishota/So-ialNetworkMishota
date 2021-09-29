import './App.css';
import react from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';



function App(props) {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer
          // store={props.store}
          // dialogs={props.state.messagesPage.dialogs}
          // messages={props.state.messagesPage.messages}
          />}
        />
        <Route path='/profile'
          render={() => <Profile
          // store={props.store}
          // profilePage={props.state.profilePage}
          // dispatch={props.dispatch}
          />}
        />
        <Route path='/users'
          render={() => <UsersContainer />}
        />

      </div>
    </div>

  );
}

export default App;
