import './App.css';
import react from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />}
          />
          <Route path='/dialogs'
            render={() => <Dialogs
              dialogs={props.state.messagesPage.dialogs}
              messages={props.state.messagesPage.messages} />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
