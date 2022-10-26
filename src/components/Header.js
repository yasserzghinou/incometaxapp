import React from "react";
import Salarycalc from "./Salarycalc";
import logo from "/home/olsein/Projects/app01/src/medias/img/lion-svgrepo-com.svg";
import flag from "/home/olsein/Projects/app01/src/medias/img/flag-for-morocco-svgrepo-com.svg";

const Header = (props) => {
  return (
    <div className="header-wrap">
      <div className="header-wrap-top">
        <div className="logo-wrap">
          <img className="logo" src={logo} alt="Logo"></img>
          <h3>daribti</h3>
        </div>
        <ul className="languages">
          <li>Francais</li>
          <li>|</li>
          <li>Arabe</li>
        </ul>
      </div>

      <div className="header-wrap-main">
        <div className="calc-wrap">
          <div className="calc-wrap-top">
            <h1> Calcul du salaire brut / net pour le Maroc</h1>
            <p>
              Estimez le montant de votre salaire brut / net. Calculer votre
              impot sur le revenu (I.R)
            </p>
          </div>
          {/* this is a component Salarycalc.js */}
          <Salarycalc />
          {/* end */}
        </div>
        <img className="flag" src={flag} alt="Logo"></img>
      </div>
    </div>
  );
};

// function Header() {
//   return <h1>test 2</h1>

// }
export default Header;
