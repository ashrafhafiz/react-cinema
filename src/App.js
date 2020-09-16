import React from "react";
import { Provider } from "react-redux";

import Header from "./components/header/Header";
import store from "./redux/store";
import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
        <h1>React Redux Setup</h1>
      </div>
    </Provider>
  );
};

export default App;
