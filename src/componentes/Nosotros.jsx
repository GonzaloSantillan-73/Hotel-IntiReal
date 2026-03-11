import "../estilos/Nosotros.css";
import Valores from "./Valores";
import ImagenHero from "./ImagenHero"
import { arrayValores } from "../data/data"

const Nosotros = () => {
  const valores = arrayValores
  return (
    <div className="contenedor-nosotros">
      <ImagenHero img="hero-nosotros.png" tam={30} text="Un rincón de tranquilidad, pensado para que te sientas como en casa." />
      <div className="contenedor-historia">
        <div>
          <img src="/imagenes/nosotros1.png" alt="" />
          <div>
            <h2>Nuestra Historia</h2>
            <p>
              Hotel IntiReal nació como una antigua casona familiar restaurada con
              amor. Desde hace más de 15 años, recibimos a viajeros con el
              compromiso de brindar una experiencia auténtica y cálida.
            </p>
          </div>
        </div>

        <div>
          <img src="/imagenes/nosotros2.jpg" alt="" />
          <div>
            <h2>Conectados con lo local</h2>
            <p>
              El IntiReal, los detalles artesanales y la gastronomía regional nos
              identifican. Buscamos que cada huésped se lleve un pedacito de
              nuestra cultura y hospitalidad.
            </p>
          </div>
        </div>

        <div>
          <img src="/imagenes/nosotros3.jpg" alt="" />
          <div>
            <h2>Nuestro equipo</h2>
            <p>
              Estamos formados por un grupo de personas comprometidas con la
              hospitalidad, el respeto por el ambiente y la calidad en cada
              experiencia. ¡Te esperamos!
            </p>
          </div>
        </div>
      </div>
      <div className="contenedor-valores">
        <h2>Nuestros valores</h2>
        <div>
          {valores.map((valor, i) => {
            return (
              <Valores
                key={i}
                icono={valor.icono}
                titulo={valor.titulo}
                descripcion={valor.descripcion}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
