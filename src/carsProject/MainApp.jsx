import React from "react";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";

const MainApp = () => {
  return (
    <div className="grid justify-center items-center m-2 border-2 border-black py-2 ">
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
};

export default MainApp;
