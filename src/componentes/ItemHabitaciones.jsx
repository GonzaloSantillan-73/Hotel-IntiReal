import "../estilos/ItemHabitaciones.css";
import { Link } from "react-router-dom";

const ItemHabitaciones = ({ img, titulo, descripcion, detalles, precio, max }) => {
  return (
    <div className="item-habitaciones">
      <img src={`/imagenes/${img}`} alt="" />
      <div>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <ul>
          <li>Máximo {max} personas</li>
          {detalles.map((detalle, i) =><li key={i}>{detalle}</li>)}
        </ul>
        <p>Desde ${(precio).toLocaleString("es-AR")}</p>
        <Link className="boton-reservar" to="/reservar/" state={{ titulo, max, precio}}>Reservar</Link>
      </div>
    </div>
  );
};

export default ItemHabitaciones;
