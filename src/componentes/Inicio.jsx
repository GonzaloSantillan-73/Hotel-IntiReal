import "../estilos/Inicio.css";
import { Link } from "react-router-dom";
import Testimonios from "./Testimonios";
import ImagenHero from "./ImagenHero";
import { arrayTestimonios } from "../data/data";

const Inicio = () => {
  const testimonios = arrayTestimonios;
  return (
    <div className="inicio">
      <ImagenHero
        img="hotel.jpg"
        tam={100}
        text="Descubre el lugar perfecto para tu descanso. Confort y atención personalizada."
      />
      <div className="subcontenedor-inicio">
        <h2>Un Hotel con Encanto</h2>
        <p className="parrafo">
          <strong>IntiReal</strong> ofrece una experiencia única en un entorno
          natural increíble. Nuestro hotel combina la arquitectura tradicional
          de adobe con todas las comodidades modernas, rodeado de viñedos y
          paisajes impresionantes. Disfrutá de nuestras habitaciones, paseos por
          la naturaleza y visitas a bodegas. Ya sea en pareja, en familia o
          buscando un descanso, es el lugar ideal para relajarte y desconectar.
        </p>
        <Link to="/nosotros" className="boton-saberMas">
          Saber mas...
        </Link>
        <div className="ilustraciones-inicio">
          <img className="img1" src="/imagenes/mesa.jpg" alt="" />
          <img className="img2" src="/imagenes/casagrande.jpg" alt="" />
          <img className="img3" src="/imagenes/patio.png" alt="" />
        </div>
        <h2>Lo que dicen nuestros huéspedes</h2>
        <Testimonios testimonios={testimonios} />
        <h2>Nuestra ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.9533982521207!2d-65.78047185873987!3d-28.46893168743507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942429d10509de29%3A0xc825660db3628e4!2sMonumento%20Gral%20San%20Martin!5e1!3m2!1ses-419!2sar!4v1772940472067!5m2!1ses-419!2sar"
          className="mapa"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Inicio;
