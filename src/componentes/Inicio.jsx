import "../estilos/Inicio.css";
import { Link } from "react-router-dom";
import Testimonio from "./Testimonio";

const Inicio = () => {
  const testimonios = [
    {
      id:1,
      nombre: "Silvia Ocampo",
      img: "/imagenes/persona1.webp",
      comentario:"Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable."
    },
    {
      id:2,
      nombre: "Roberto Diaz",
      img: "/imagenes/persona2.jpg",
      comentario:"Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable."
    },
    {
      id:3,
      nombre: "Ignacio Vega",
      img: "/imagenes/persona3.jpg",
      comentario:"Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable."
    }
  ]

  return (
    <div className="contenedor-inicio">
      <div className="img-hero">
        <div>
          <h1 style={{ fontSize: "40px" }}>IntiReal</h1>
          <p style={{ fontSize: "22px" }}>
            Descubre el lugar perfecto para tu descanso. Confort y atención
            personalizada.
          </p>
        </div>
      </div>
      <h2>Un Hotel con Encanto</h2>
      <p className="parrafo">
        <strong>IntiReal</strong> ofrece una experiencia única en un entorno increíble.
        Nuestro Hotel combina la arquitectura de adobe con todas las comodidades
        modernas, rodeado de paisajes impresionantes. Relajate en nuestras
        encantadoras habitaciones, pasea por el entorno de viñedos y disfruta de
        actividades como caminatas, visitas a bodegas. Ya sea que vengas en
        pareja, con la familia o buscando un retiro, aquí encontrarás todo lo
        que necesitas para desconectarte y disfrutar.
      </p>
      <div className="ilustraciones-inicio">
        <img src="/imagenes/casagrande.jpg" alt="" />
        <img src="/imagenes/mesa.jpg" alt="" />
        <img src="/imagenes/patio.png" alt="" />
      </div>
      <div className="titulo-testimonios">Testimonios</div>
      <h2>Lo que dicen nuestros huéspedes</h2>
      {
        testimonios.map((persona)=>{
          return(
            <Testimonio key={persona.id} nombre={persona.nombre} img={persona.img} comentario={persona.comentario}/>
          )
        })
      }
    </div>
  );
};

export default Inicio;
