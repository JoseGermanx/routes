import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Main() {
  return (
    <div className="container">
      <h1>Pagina de inicio</h1>
      <h2>Enlaces</h2>
      <div>
        <Link to="/contact">Contacto</Link>
        <br />
        <Link to="/gallery">Gallery</Link>
        <br />
        <Link to="/products">Productos</Link>
        <br />
        <Button />

      </div>
    </div>
  );
}

export default Main;
