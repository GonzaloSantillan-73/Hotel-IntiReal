import { Link } from "react-router-dom";
import "../estilos/Header.css";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function Header() {
  const [barra, setBarra] = useState(false);

  const cambiarBarra = () => {
    setBarra(!barra);
  };
  return (
    <>
      <header className="Header">
        <TiThMenu className="boton-menu" onClick={() => cambiarBarra()} />
        <h1>Inti Real</h1>
        <nav className={barra ? "navegacion abierto" : "navegacion"}>
          <MdOutlineClose
            className="boton-close"
            onClick={() => cambiarBarra()}
          />
          <ul>
            <li>
              <Link>Inicio</Link>
            </li>
            <li>
              <Link>Nosotros</Link>
            </li>
            <li>
              <Link>Habitaciones</Link>
            </li>
            <li>
              <Link>Servicios</Link>
            </li>
            <li>
              <Link>Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
