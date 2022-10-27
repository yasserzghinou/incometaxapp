import "./App.css";
import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import SalaryContext from "./components/SalaryContext";

function App() {
  const [salary, setSalary] = useState(11000);
  const [selector, setSelector] = useState("month");
  return (
    <div className="App">
      <SalaryContext.Provider
        value={{ value1: [salary, setSalary], value2: [selector, setSelector] }}
      >
        <Header />
        <Result />
      </SalaryContext.Provider>
    </div>
  );
}

export default App;
