
import './App.css';
import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import ChatNav from './ChatNav';

function App() {
  return (    
  <BrowserRouter>
    <Route component={ChatNav} path='/'/>
    <Route component={ChatNav} path='/:selectedRoomId'/>
  </BrowserRouter>
  );
}

export default App;
