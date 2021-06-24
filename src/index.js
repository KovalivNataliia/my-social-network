import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: 'Hello!', likes: 5},
  {id: 2, message: 'I have a great mood!', likes: 10},
  {id: 3, message: 'This is my first app', likes: 50},
  {id: 4, message: 'Hello, how are you?', likes: 3},
  {id: 5, message: 'Yo', likes: 15}
]

let dialogsData = [
  {id: 1, name: 'Mother'},
  {id: 2, name: 'Nastya'},
  {id: 3, name: 'Sviatoslav'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Vova'}
]

let messagesData = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'How is your mood?'},
  {id: 3, message: 'Where are you from?'},
  {id: 4, message: 'See you later!'},
  {id: 5, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
