const Result = (props) => {
  return (
    <div className="result">
      <div className="result-top">
        <h2>Ton Salaire Net: xxxxxxxx</h2>
        <div>
          <ul className="result-top-right">
            <li className="nav-item">Annuel</li>

            <li className="nav-item">Mensuel</li>

            <li className="nav-item">Journalier</li>
          </ul>
        </div>
      </div>
      {/* <hr class="solid"></hr> */}
      <div className="result-main">
        <p>.......... .............</p>
        <p>.......... .............</p>
        <p>.......... .............</p>
        <p>.......... .............</p>
        <p>.......... .............</p>
        <p>.......... .............</p>
        <p>.......... .............</p>
        <p>.......... .............</p>
        <p>.......... .............</p>
      </div>
    </div>
  );
};

export default Result;
