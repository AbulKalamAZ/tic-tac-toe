import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/HomePage";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

// creating store

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
