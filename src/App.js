import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';



const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
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
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer
          // store={props.store}
          // profilePage={props.state.profilePage}
          // dispatch={props.dispatch}
          />}
        />
        <Route path='/users'
          render={() => <UsersContainer />}
        />
        <Route path='/login'
          render={() => <LoginPage />}
        />

      </div>
    </div>

  )
}

export default App;
