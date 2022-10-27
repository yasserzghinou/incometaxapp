import React, { useContext, useState } from "react";
import SalaryContext from "./SalaryContext";

const Result = (props) => {
  const { value1, value2 } = useContext(SalaryContext);
  const [salary, setSalary] = value1;
  const [selector, setSelector] = value2;
  const [tax, setTax] = useState(0);

  //helper function to calculate the tax
  const taxCalc = (salary) => {
    if (salary < 30000) {
      return 0;
    } else {
      return salary / 2;
    }
  };
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
            <p className="result-subtext">- {tax} DHS</p>
            <p className="result-subtext">- 300 DHS</p>
            <p className="result-subtext">- 510 DHS</p>
            <hr class="solid-white"></hr>

            <h4>- 1,200 DHS</h4>
            <h3>8,800 DHS</h3>
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
