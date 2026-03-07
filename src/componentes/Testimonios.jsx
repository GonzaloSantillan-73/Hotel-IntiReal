import CardTestimonios from "./CardTestimonios";
import "../estilos/Testimonios.css"

const Testimonios = ({testimonios}) => {
  return (
    <div className="contenedor-testimonios">
      {testimonios.map((persona, i) => {
        return (
          <CardTestimonios
            key={i}
            nombre={persona.nombre}
            img={persona.img}
            comentario={persona.comentario}
          />
        );
      })}
    </div>
  );
};

export default Testimonios;
