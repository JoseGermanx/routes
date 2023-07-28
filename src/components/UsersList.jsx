

//Crear un componente que utilice useEffect y useState para renderizar la lista de usuarios de la api
// https://jsonplaceholder.typicode.com/users/ (petición por medio de axios).


import React, { useState } from 'react'

const UsersList = () => {
const [usersList, setUserslist] = useState([]);


  return (
    <div>
        <ul>
            {/* Acá debemos recorrer el arreglo que se almacenó en usersList */}


        </ul>
    </div>
  )
}

export default UsersList