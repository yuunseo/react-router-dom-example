import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";

function NotFound(){
  return(
    <div>
      Not Found :^(
    </div>
  )
}
function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topic(){
  return(
    <div>
      <h2>Topic</h2>
      Topic...
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App(){
  return(
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <h1>React Router DOM example</h1>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/topics" element={<Topic />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
