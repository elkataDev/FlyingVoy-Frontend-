import { useEffect, useState } from "react";

function VuelosPage() {

  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/vuelos") 
      .then(res => res.json())
      .then(data => setVuelos(data))
      .catch(err => console.error(err));
  }, []);


  return (
    <div >
      <h1 >Lista de Vuelos</h1>
      <ul >
        {vuelos.map(vuelo => (
          <li key={vuelo.idVuelo}>
            <p><b>Compañía:</b> {vuelo.compania}</p>
            <p><b>Salida:</b> {vuelo.aeropuertoSalida}</p>
            <p><b>Destino:</b> {vuelo.aeropuertoDestino}</p>
            <p><b>Fecha:</b> {vuelo.fechaVuelo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VuelosPage;
