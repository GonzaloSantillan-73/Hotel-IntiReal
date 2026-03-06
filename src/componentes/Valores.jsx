import "../estilos/Valores.css"

const Valores = ({icono,titulo,descripcion}) => {
  return (
    <div className="item-valores">
      <img src={icono} alt="" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default Valores
