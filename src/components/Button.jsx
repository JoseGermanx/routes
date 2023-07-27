import React, {useState} from "react";

const Button = () => {

  const [texto, setTexto ] = useState("Valor inicial");
  const [contador, setContador] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setContador(contador + 1);
    setTexto("Nuevo valor");
    console.log(texto);
  };

  return (
    <div>
      <button onClick={handleClick}>Cambiar estados</button>
      <div>
      <p>El valor actual es: {contador}</p>
      <p>El valor de texto es: {texto}</p>
      </div>
    </div>
  );
};

export default Button;
