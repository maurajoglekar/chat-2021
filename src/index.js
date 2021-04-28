import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./configureStore";

import "./index.css";
import AppRouter from "./AppRouter";

const AppWrapper = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
