import "../estilos/CardServicios.css"

const CardServicio = ({ icono: Icono, titulo, descripcion }) => {
  return (
    <div className="card-servicios">
      <div className="icono-titulo">
        <span><Icono /></span>
        <h2>{titulo}</h2>
      </div>
      <p>{descripcion}</p>
    </div>
  );
};

export default CardServicio