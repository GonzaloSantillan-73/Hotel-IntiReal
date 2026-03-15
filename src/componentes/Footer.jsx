import "../estilos/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h1 className="titulo-footer">IntiReal</h1>
      <div className="footer-contenedor">
        <div className="enlaces-footer">
          <div>
            Enlaces
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/habitaciones">Habitaciones</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
        <div className="redes-footer">
          <div>
            Redes Sociales
            <div className="iconos-redes">
              <p><span><FaFacebookSquare /></span><a href=""> Facebook</a></p>
              <p><span><FaSquareXTwitter /></span><a href=""> X/Twitter</a></p>
              <p><span><FaSquareInstagram /></span><a href=""> Instagram</a></p>
            </div>
          </div>
        </div>
        <div className="contacto-footer">
          <div>
            Contacto
            <div className="iconos-contacto">
              <p><span><MdEmail /></span><a href="mailto:IntiReale@gmail.com"> IntiReal@gmail.com</a></p>
              <p><span><FaPhoneAlt /></span><a href="tel:+543837420675"> +54 3837423671</a></p>
              <p><span><FaWhatsapp /></span><a href="https://wa.me/543837695384">+54 3837695384</a></p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="final">Todos los derechos reservados Hotel IntiReal. Copyright ©</p>
      <p className="final">By Gonzalo Santillan</p>
    </footer>
  );
};

export default Footer;
