import "../estilos/Servicios.css";
import CardServicios from "./CardServicios";
import ImagenHero from "./ImagenHero"
import { arrayServicios } from "../data/data"

const Servicios = () => {
  const servicios = arrayServicios

  return (
    <div className="servicios">
      <ImagenHero img="hero-nosotros.png" tam={30} text="Comodidad, naturaleza y hospitalidad en cada detalle" />
      <div className="contenedor-card-servicios">
        {servicios.map((servicio, i) => {
          return (
            <CardServicios
              key={i}
              icono={servicio.icono}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
            />
          );
        })}
      </div>
      <div className="contenedor-galeria-ambientes">
        <h2>Ambientes y Experiencias</h2>
        <div className="contenedor-galeria">
          <img src="/imagenes/galeria1.jpg" alt="" />
          <img src="/imagenes/galeria2.jpg" alt="" />
          <img src="/imagenes/galeria3.jpg" alt="" />
          <img src="/imagenes/galeria4.jpg" alt="" />
          <img src="/imagenes/galeria5.jpg" alt="" />
          <img src="/imagenes/galeria6.jpg" alt="" />
          <img src="/imagenes/galeria7.jpg" alt="" />
          <img src="/imagenes/galeria8.jpg" alt="" />
          <img src="/imagenes/galeria9.jpg" alt="" />
          <img src="/imagenes/galeria10.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
