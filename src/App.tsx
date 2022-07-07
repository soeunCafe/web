import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IndexRouter from "./route/router";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store()}>
      <IndexRouter></IndexRouter>
    </Provider>
  );
}

export default App;
