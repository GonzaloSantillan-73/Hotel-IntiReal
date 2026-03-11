import "../estilos/Habitaciones.css";
import ItemHabitaciones from "./ItemHabitaciones";
import ImagenHero from "./ImagenHero";
import {arrayHabitaciones} from "../data/data"

const Habitaciones = () => {
  const habitaciones = arrayHabitaciones
  return (
    <div>
      <ImagenHero img="hero-nosotros.png" tam={30} text="Disfrutá de habitaciones cálidas, camas cómodas y vistas únicas"/>
      <div className="contenedor-item-habitaciones">
        {habitaciones.map((hab, i) => (
          <ItemHabitaciones
            key={i}
            img={hab.img}
            titulo={hab.titulo}
            descripcion={hab.descripcion}
            detalles={hab.detalles}
            precio={hab.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default Habitaciones;
