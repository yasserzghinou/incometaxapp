const Salarycalc = (props) => {
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
          required
        ></input>
        <select id="dropdown-list">
          <option value="year">Année</option>
          <option value="month">Mois</option>
        </select>
        <button id="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Salarycalc;
