import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MishotaSocialApp from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// let rerenderEntireTree = (state) => {

// let rerenderEntireTree = () => {
ReactDOM.render(
  <MishotaSocialApp />
  , document.getElementById('root')
);
// }
// rerenderEntireTree(store.getState());
// store.subscribe(() => { rerenderEntireTree(store.getState()) });
// rerenderEntireTree();
// store.subscribe(() => { rerenderEntireTree() });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
