import React, { useEffect, useState } from "react";
import getUser from "../services/getUser";

const usuarioInicial = {
  name: "Anibal",
  email: "anibal@gmail.com",
};

const FetchUsers = () => {
  const [user, setUser] = useState(usuarioInicial);

  const updateUser = async () => {
    const newUser = await getUser();
    setUser(newUser);
  };

  const setUsuarioInicial = ()=> {
    setUser(usuarioInicial)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(user);
      updateUser();
    }, 2000);
  }, [user]);

  return (
    <div>
      <button onClick={setUsuarioInicial}>Colocar usuario inicial</button>
      <h1>Nombre: {user.name}</h1>
      <h3>Email: {user.email}</h3>
    </div>
  );
};

export default FetchUsers;
