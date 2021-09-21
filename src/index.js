import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducers";
import { applyMiddleware, createStore } from "redux";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

