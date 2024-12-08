import React from "react";
import MainApp from "./carsProject/MainApp";
import { Provider } from "react-redux";
import { store } from "./carsProject/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
