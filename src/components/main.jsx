import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Pagina de inicio</h1>
      <h2>Enlaces</h2>
      <div>
        <Link to="/contact">Contacto</Link>
        <br />
        <Link to="/gallery">Gallery</Link>
        <br />
        <Link to="/products">Productos</Link>

      </div>
    </div>
  );
}

export default Main;
