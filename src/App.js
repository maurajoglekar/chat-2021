import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import ChatNav from './ChatNav';
import Login from './Login';

function App() {
  return (    
  <BrowserRouter>
    <Route exact component={Login} path='/'/>
    <Route component={ChatNav} path='/chat'/>
  </BrowserRouter>
  );
}

export default App;
