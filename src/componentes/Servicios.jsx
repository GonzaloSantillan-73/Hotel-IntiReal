import "../estilos/Servicios.css";
import { GiCoffeeCup } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaWaterLadder } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import { GiLotus } from "react-icons/gi";
import CardServicios from "./CardServicios";

const Servicios = () => {
  const servicios = [
    {
      titulo: "Desayuno Artesanal",
      descripcion:
        "Disfrutá cada mañana de productos caseros, frutas frescas, etc.",
      icono: <GiCoffeeCup />,
    },
    {
      titulo: "Wi-Fi Gratis",
      descripcion:
        "Mantente conectado con internet de alta velocidad en todo el hotel.",
      icono: <FaWifi />,
    },
    {
      titulo: "Estacionamiento",
      descripcion:
        "Amplio espacio seguro para que estaciones con tranquilidad.",
      icono: <FaCar />,
    },
    {
      titulo: "Pileta / Jacuzzi",
      descripcion: "Relajate en nuestra piscina al aire libre.",
      icono: <FaWaterLadder />,
    },
    {
      titulo: "Restaurante",
      descripcion:
        "Recomendaciones personalizadas para que explores lo mejor de Tinogasta.",
      icono: <IoRestaurant />,
    },
    {
      titulo: "Espacios de Relajación",
      descripcion:
        "Patios internos y zonas de lectura para desconectar y descansar.",
      icono: <GiLotus />,
    },
  ];

  return (
    <div className="servicios">
      <div className="img-hero-servicios">
        <div>
          <h1>Nuestros Servicios</h1>
          <p>Comodidad, naturaleza y hospitalidad en cada detalle</p>
        </div>
      </div>
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
