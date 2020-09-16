import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux has been hooked.</h1>
      </div>
    </Provider>
  );
};

export default App;
