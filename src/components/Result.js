import React, { useContext, useEffect, useState } from "react";
import SalaryContext from "./SalaryContext";

const Result = (props) => {
  const { value1, value2 } = useContext(SalaryContext);
  const [salary, setSalary] = value1;
  const [selector, setSelector] = value2;
  const [tax, setTax] = useState(0);
  const [cnss, setCnss] = useState(0);
  const [amoresult, setAmoresult] = useState(0);
  const [netSalary, setNetSalary] = useState(0);
  const [ir, setIr] = useState(0);
  const [fsalary, setFsalary] = useState("");
  const AMO = 0.0226;

  //helper functions to calculate the tax & CNSS
  const taxCalc = (salary) => {
    if (salary < 30000) {
      setTax(0);
      // console.log(tax);
    } else if (salary >= 30000 && salary <= 50000) {
      setTax(Math.floor(salary * 0.1));
    } else if (salary > 50000 && salary <= 60000) {
      setTax(Math.floor(salary * 0.2));
    } else if (salary > 60000 && salary <= 80000) {
      setTax(Math.floor(salary * 0.3));
    } else if (salary > 80000 && salary <= 180000) {
      setTax(Math.floor(salary * 0.34));
    } else if (salary > 180000) {
      setTax(Math.floor(salary * 0.38));
    }
  };

  const cnssCalc = (salary) => {
    if (salary <= 72000) {
      setCnss(Math.floor(salary * 0.0452));
    } else setCnss(Math.floor(72000 * 0.0452));
  };
  const amoCalc = (salary) => setAmoresult(Math.floor(salary * AMO));
  const irCalc = (salary) => setIr(Math.floor(tax + cnss + amoresult));

  const netSalaryCalc = (salary) => {
    setNetSalary(salary - ir);
    // console.log(salary.toLocaleString("en-US"));
    setFsalary(netSalary.toLocaleString("en-US"));
  };
  //useEffect hook used to update the DOM view with the result calculations
  useEffect(() => {
    // console.log("I rendered");
    taxCalc(salary);
    cnssCalc(salary);
    amoCalc(salary);
    irCalc(salary);
    netSalaryCalc(salary);
  });

  return (
    <div className="result">
      <div className="result-top">
        <div className="result-top-left">
          <h3>Resultat </h3>
        </div>
        <div>
          <ul className="result-top-right">
            <li className="nav-item">Année</li>

            <li className="nav-item">Mois</li>

            <li className="nav-item">Jour</li>
          </ul>
        </div>
      </div>
      <div className="result-main">
        <div className="result-main-left">
          <div className="result-main-left-labels">
            <h3>Décompte</h3>
            <hr class="solid"></hr>
            <h4>Salaire (brut)</h4>
            <p className="result-subtext">Impôt sur le revenu</p>
            <p className="result-subtext">CNSS</p>
            <p className="result-subtext">AMO</p>
            <hr class="solid"></hr>

            <h4>Impôt total</h4>
            <h3>Salaire net</h3>
            <hr class="solid"></hr>
            <p className="result-subtext">Taux d'imposition marginal</p>
            <p className="result-subtext">Taux d'imposition moyen</p>
          </div>
          <div className="result-main-left-results">
            <h3>(MAD)</h3>
            <hr class="solid-white"></hr>
            <h4>{salary} DHS</h4>
            <p className="result-subtext">-{tax} DHS</p>
            <p className="result-subtext">- {cnss} DHS</p>
            <p className="result-subtext">- {amoresult} DHS</p>
            <hr class="solid-white"></hr>

            <h4>- {ir} DHS</h4>
            <h3>{fsalary} DHS</h3>
            <hr class="solid-white"></hr>
            <p className="result-subtext">11%</p>
            <p className="result-subtext">18%</p>
          </div>
        </div>
        <div className="result-main-right">
          <p>,,,,,,,, ,,,,,,,,</p>
          <p>,,,,,,,, ,,,,,,,,</p>
          <p>,,,,,,,, ,,,,,,,,</p>
          <p>,,,,,,,, ,,,,,,,,</p>
          <p>,,,,,,,, ,,,,,,,,</p>
          <p>,,,,,,,, ,,,,,,,,</p>
          <p>,,,,,,,, ,,,,,,,,</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
