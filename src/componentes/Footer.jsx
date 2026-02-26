import "../estilos/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h1 className="titulo-footer">IntiReal</h1>
      <ul className="enlaces-footer">
        Enlaces
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/habitaciones">Habitaciones</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <div>
        Contacto
        
      </div>
    </footer>
  );
};

export default Footer;
