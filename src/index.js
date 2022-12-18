import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './Profile';
// import Button3 from './Button3';
// import App from './App';
// import Three from './Three';
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
// import Controlled from './Controlled';
// import Page1 from './Page1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Button3/> */}
      {/* <Three/> */}
      <Profile></Profile>
      {/* <Controlled></Controlled> */}
      {/* <Page1></Page1> */}
  </React.StrictMode>
);
   
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
