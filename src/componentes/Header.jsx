import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../estilos/Header.css";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";

function Header() {
  const [barra, setBarra] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setBarra(false);
  }, [location]);

  const cambiarBarra = () => {
    setBarra(!barra);
  };
  return (
    <>
      <header className="Header">
        <TiThMenu className="boton-menu" onClick={() => cambiarBarra()} />
        <h1>IntiReal</h1>
        <nav className={barra ? "navegacion abierto" : "navegacion"}>
          <MdOutlineClose
            className="boton-close"
            onClick={() => cambiarBarra()}
          />
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/habitaciones">Habitaciones</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
