import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from "react-redux";
import { getAuthUserData } from "./redux/AuthReducer"
import { compose } from 'redux';
import { initializeApp } from "./redux/AppReducer"
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized)
      return <Preloader />
    return (
      < div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer
            // store={props.store} dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}
            />}
          />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer
            // store={props.store} profilePage={props.state.profilePage} dispatch={props.dispatch} 
            />}
          />
          <Route path='/users'
            render={() => <UsersContainer />}
          />
          <Route path='/login'
            render={() => <LoginPage />}
          />
        </div>
      </ div>
    )
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})
// export default App;
// export default compose(
//   withRouter,
//   connect(mapStateToProps, { initializeApp })
// )(App);

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let MishotaSocialApp = (props) => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // store={store}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default MishotaSocialApp;
