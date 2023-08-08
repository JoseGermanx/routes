import React, {useEffect, useState} from 'react'

import { useLocation } from 'react-router-dom';
import { topImages }  from '../services/imagesservice';

const HeaderDinamico = () => {
    const location = useLocation();
    const [ ubicacion, setUbicacion ] = useState("");

    useEffect(() => {
        const str = location.pathname;
        console.log(str);
        const newStr = str.slice(1)
        console.log(newStr);
          setUbicacion(newStr);
          console.log(ubicacion);
        }, [location]);

  return (
    <div>
        {ubicacion && <img
        src={topImages(`./${ubicacion}.jpg`)}
        alt="imagen"
        />} 
        </div>
  )
}

export default HeaderDinamico