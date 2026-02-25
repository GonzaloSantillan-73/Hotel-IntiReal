import "../estilos/Inicio.css"
import { Link } from "react-router-dom"

const Inicio=()=>{
  return(
    <>
      <div className="img-hero">
        <div >
          <h1 style={{fontSize:"40px"}}>IntiReal</h1>
          <p style={{fontSize:"22px"}}>Descubre el lugar perfecto para tu descanso. Confort y atención personalizada.</p>
          <Link className="boton-reserva">Reserva ahora</Link>
        </div>
      </div>
    </>
  )
}

export default Inicio