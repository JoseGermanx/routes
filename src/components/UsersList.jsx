//Crear un componente que utilice useEffect y useState para renderizar la lista de usuarios de la api
// https://jsonplaceholder.typicode.com/users/ (petición por medio de axios).

import React, { useEffect, useState } from "react";
import getAllUsers from "../services/getAllUsers";

const UsersList = () => {
  const [usersList, setUserslist] = useState([]);

  const users = async () => {
    const users = await getAllUsers();
    console.log(users)
    setUserslist(users);
  };

  useEffect(() => {
    users();
  }, []);

  return (
    <div>

        <h1>Lista de usuarios</h1>
      <ul>
        {
          /* Acá debemos recorrer el arreglo que se almacenó en usersList 
            Tip: Método map de arrays
            */
          usersList.map((user) => {
            return (
              <li key={user.id}>
                <div>
                <h4>{user.username}</h4>
                  <h2>{user.name}</h2>
                  <h2>{user.email}</h2>
                  <h3>{user.website}</h3>
                </div>
               <br/>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default UsersList;
