import "../estilos/Inicio.css";
import { Link } from "react-router-dom";
import Testimonios from "./Testimonios"

const Inicio = () => {
  const testimonios = [
    {
      nombre: "Silvia Ocampo",
      img: "/imagenes/persona1.webp",
      comentario:
        "Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable.",
    },
    {
      nombre: "Roberto Diaz",
      img: "/imagenes/persona2.jpg",
      comentario:
        "Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable.",
    },
    {
      nombre: "Ignacio Vega",
      img: "/imagenes/persona3.jpg",
      comentario:
        "Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable.",
    },
  ];

  return (
    <div className="inicio">
      <div className="img-hero">
        <div>
          <h1>IntiReal</h1>
          <p>
            Descubre el lugar perfecto para tu descanso. Confort y atención
            personalizada.
          </p>
        </div>
      </div>
      <div className="subcontenedor-inicio">
        <h2>Un Hotel con Encanto</h2>
        <p className="parrafo">
          <strong>IntiReal</strong> ofrece una experiencia única en un
          entorno natural increíble. Nuestro hotel combina la arquitectura
          tradicional de adobe con todas las comodidades modernas, rodeado de
          viñedos y paisajes impresionantes. Disfrutá de nuestras habitaciones,
          paseos por la naturaleza y visitas a bodegas. Ya sea en pareja, en
          familia o buscando un descanso, es el lugar ideal para relajarte y
          desconectar.
        </p>
        <Link to="/nosotros" className="boton-saberMas">Saber mas...</Link>
        <div className="ilustraciones-inicio">
          <img className="img1" src="/imagenes/mesa.jpg" alt="" />
          <img className="img2" src="/imagenes/casagrande.jpg" alt="" />
          <img className="img3" src="/imagenes/patio.png" alt="" />
        </div>
        <div className="titulo-testimonios">Testimonios</div>
        <h2>Lo que dicen nuestros huéspedes</h2>
        <Testimonios testimonios={testimonios}/>
      </div>
    </div>
  );
};

export default Inicio;
