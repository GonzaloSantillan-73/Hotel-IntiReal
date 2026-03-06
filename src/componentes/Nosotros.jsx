import "../estilos/Nosotros.css";
import Valores from "./Valores"

const Nosotros = () => {

  const valores = [
    {
      titulo: "Hospitalidad",
      icono: "/imagenes/icono-cultura.png",
      descripcion: "Atención cercana, personalizada y con calidez familiar."
    },
    {
      titulo: "Identidad local",
      icono: "/imagenes/icono-hospitalidad.png",
      descripcion: "Celebramos nuestras raíces en cada espacio y servicio."
    },
    {
      titulo: "Sustentabilidad",
      icono: "/imagenes/icono-sustentabilidad.png",
      descripcion: "Respetamos el entorno natural y promovemos prácticas ecológicas."
    }
  ]

  return (
    <div className="contenedor-nosotros">
      <div className="img-hero-nosotros">
        <div>
          <h2>Bienvenidos a Hotel IntiReal</h2>
          <p>
            Un rincón de tranquilidad, pensado para que te sientas como en casa.
          </p>
        </div>
      </div>
      <div className="contenedor-historia">
        <div className="contenedor-grid-historia">
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
        <div className="contenedor-grid-historia">
          <img src="/imagenes/nosotros2.jpg" alt="" />
          <div>
            <h2>Conectados con lo local</h2>
            <p>El IntiReal, los detalles artesanales y la gastronomía regional nos identifican. Buscamos que cada huésped se lleve un pedacito de nuestra cultura y hospitalidad.</p>
          </div>
        </div>
        <div className="contenedor-grid-historia">
          <img src="/imagenes/nosotros3.jpg" alt="" />
          <div>
            <h2>Nuestro equipo</h2>
            <p>Estamos formados por un grupo de personas comprometidas con la hospitalidad, el respeto por el ambiente y la calidad en cada experiencia. ¡Te esperamos!</p>
          </div>
        </div>
      </div>
      <div className="contenedor-valores">
        <h2>Nuestros valores</h2>
        <div>
          {
            valores.map((valor,i)=>{
              return(
                <Valores key={i} icono={valor.icono} titulo={valor.titulo} descripcion={valor.descripcion}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
