import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import UserData from "./data.json";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
     <Filter />
    </div>
  );
}

export default App;