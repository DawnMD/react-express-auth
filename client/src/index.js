import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducers from "./reducers";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancedStore = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={enhancedStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
