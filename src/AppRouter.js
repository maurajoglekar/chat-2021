import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ChatConsole from "./container/ChatConsole";
import Login from "./views/LoginForm";

function AppRouter() {
  return (
    <BrowserRouter>
      <Route exact component={Login} path="/" />
      <Route component={ChatConsole} path="/chat/:userName" />
    </BrowserRouter>
  );
}

export default AppRouter;
