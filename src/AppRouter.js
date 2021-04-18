import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ChatNav from './container/ChatNav';
import Login from './views/LoginForm';

function AppRouter() {
  return (    
  <BrowserRouter>
    <Route exact component={Login} path='/'/>
    <Route component={ChatNav} path='/chat/:userName'/>
  </BrowserRouter>
  );
}

export default AppRouter;
