import React, { useContext, useEffect, useState } from "react";
import SalaryContext from "./SalaryContext";
import { math, derivative, sin } from "mathjs";
import Pie from "./Pie";

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
  const [tmarginal, setTmarginal] = useState(0);
  const [tmoyen, setTmoyen] = useState(0);
  const [timeframe, setTimeframe] = useState(selector);
  const [hoveredItem, setHoveredItem] = useState(timeframe);
  const resetHover = () => setHoveredItem("");

  const AMO = 0.0226;
  const dSalary = salary / 365;
  const mSalary = salary / 12;
  //Helper Functions to calculate the tax & CNSS
  // Tax calc function
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
  // CNSS calc function
  const cnssCalc = (salary) => {
    if (salary <= 72000) {
      setCnss(Math.floor(salary * 0.0452));
    } else setCnss(Math.floor(72000 * 0.0452));
  };
  // AMO calc function
  const amoCalc = (salary) => setAmoresult(Math.floor(salary * AMO));
  // IR calc function
  const irCalc = (salary) => setIr(Math.floor(tax + cnss + amoresult));
  // Net Salary calc function
  const netSalaryCalc = (salary) => {
    setNetSalary(salary - ir);

    setFsalary(netSalary.toLocaleString("en-US"));
  };
  // Taux d'imposition marginal calc function
  const tauxMarginal = (salary) => setTmarginal(18.1);
  // console.log(ir.toString());
  // console.log(
  //   derivative(ir.toString() + "x", "x")
  //     .compile()
  //     .evaluate()
  // );

  // Taux d'imposition moyen calc function
  const tauxMoyen = (salary) => setTmoyen(((ir / salary) * 100).toFixed(2));

  // Main function to calculate all taxes using above helper functions
  const runCalculations = (salary) => {
    if (timeframe == "month") {
      taxCalc(mSalary);
      cnssCalc(mSalary);
      amoCalc(mSalary);
      irCalc(mSalary);
      netSalaryCalc(mSalary);
      tauxMarginal(mSalary);
      tauxMoyen(mSalary);
    } else if (timeframe == "day") {
      taxCalc(dSalary);
      cnssCalc(dSalary);
      amoCalc(dSalary);
      irCalc(dSalary);
      netSalaryCalc(dSalary);
      tauxMarginal(dSalary);
      tauxMoyen(dSalary);
    } else {
      taxCalc(salary);
      cnssCalc(salary);
      amoCalc(salary);
      irCalc(salary);
      netSalaryCalc(salary);
      tauxMarginal(salary);
      tauxMoyen(salary);
    }
  };

  //useEffect hook used to update the DOM view with the result calculations
  useEffect(() => {
    runCalculations(salary);
  });

  return (
    <div className="result">
      <div className="result-top">
        <div className="result-top-left">
          <h3>Resultat </h3>
        </div>
        <div>
          <ul className="result-top-right">
            <li
              className={hoveredItem === "year" ? "active" : "nav-item"}
              onClick={() => {
                setTimeframe("year");
                setHoveredItem("year");
              }}
            >
              Année
            </li>

            <li
              className={hoveredItem === "month" ? "active" : "nav-item"}
              onClick={() => {
                setTimeframe("month");
                setHoveredItem("month");
              }}
            >
              Mois
            </li>

            <li
              className={hoveredItem === "day" ? "active" : "nav-item"}
              onClick={() => {
                setTimeframe("day");
                setHoveredItem("day");
              }}
            >
              Jour
            </li>
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
            <p className="result-subtext">{tmarginal}%</p>
            <p className="result-subtext">{tmoyen}%</p>
          </div>
        </div>
        <div className="result-main-right">
          <Pie
            data={[
              {
                id: "Salaire Net",
                label: "Salaire Net",
                value: 94,
                color: "hsl(341, 70%, 50%)"
              },
              {
                id: "Impôt",
                label: "Impôt",
                value: 6,
                color: "hsl(138, 70%, 50%)"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
