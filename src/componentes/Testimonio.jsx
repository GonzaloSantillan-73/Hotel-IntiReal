import "../estilos/Testimonio.css";

const Testimonio = ({ img, nombre, comentario }) => {
  return (
    <div className="contenedor-testimonio">
      <img src={img} alt="" />
      <div className="texto-testimonio">
        <h2>{nombre}</h2>
        <p>"{comentario}"</p>
      </div>
    </div>
  );
};

export default Testimonio;
