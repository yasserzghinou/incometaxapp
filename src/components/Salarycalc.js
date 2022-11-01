import React, { useState, useContext } from "react";
import SalaryContext from "./SalaryContext";

// function numberWithCommas(num) {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

const Salarycalc = (props) => {
  // const [salary, setSalary] = useState(12000);
  const { value1, value2 } = useContext(SalaryContext);
  const [salary, setSalary] = value1;
  const [selector, setSelector] = value2;
  // const [selector, setSelector] = useState("month");
  // const contextData = useContext(SalaryContext);
  // let format_salary = numberWithCommas(salary);
  return (
    <div className="calc-wrap-body">
      <div className="calc-wrap-labels">
        <label for="text">Salaire (brut)</label>
        <label for="text">Par</label>
        <label for="text"> </label>
      </div>
      <div className="calc-wrap-main">
        <input
          type="number"
          placeholder="Salaire en dirhams (MAD)"
          step="1000"
          // value={Math.abs(salary)}
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);

            // console.log(salary);
          }}
          required
        ></input>
        <select
          id="dropdown-list"
          value={selector}
          onChange={(e) => {
            setSelector(e.target.value);
            // console.log(selector);
          }}
        >
          <option value="year">Année</option>
          <option value="month">Mois</option>
        </select>
        {/* <button id="submit-button">Calculer</button> */}
      </div>
    </div>
  );
};

export default Salarycalc;
