import React, {useState, useEffect } from 'react'


const Users = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2]= useState(0);

    //useEffect(funcionEjecutaCodigo, dependencias)
    // 1 Siempre se ejecuta al renderizar un componente (o al montarlo)

    // useEffect(()=>{
    //   console.log("useEffect sin dependecias")
    // })
    
    // useEffect(()=>{
    //   console.log("useEffect con [] dep. vacias")
    // }, [])

    //ejecutate cuando el valor del estado counter1 cambie
    useEffect(()=>{
      console.log("useEffect para [counter1]")
    },[counter1])

    useEffect(()=>{
      console.log("useEffect para [counter2]")
    },[counter2])



  return (
    <div>
      <h1>Clicks en C1 {counter1}</h1>
      <h1>Clicks en C2 {counter2}</h1>
      <button onClick={()=> setCounter1(counter1 +1)}>
        Incrementar C1
      </button>
      <br />
      <button onClick={()=> setCounter2(counter2 +1)}>
        Incrementar C2
      </button>
    </div>
  )
}

export default Users