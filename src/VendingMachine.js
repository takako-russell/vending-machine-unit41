import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="home">
      <h1>Welcome to the Vending Machine</h1>
      <h2>Choose a snack:</h2>
      <ul>
        <li>
          <Link to="/pokkie">Pokkie</Link>
        </li>
        <li>
          <Link to="/reeses">Reeses</Link>
        </li>
        <li>
          <Link to="/cokeZero">Coke Zero</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
