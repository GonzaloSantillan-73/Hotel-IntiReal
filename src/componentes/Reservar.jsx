import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { WiDirectionLeft } from "react-icons/wi";
import "../estilos/Reservar.css"

const Reservar = () => {
  const location = useLocation().state;
  const { register, handleSubmit } = useForm();
  const [reserva, setReserva] = useState();

  const comprar = (data) => {
    setReserva({
      ...data,
      habitacion: location.titulo,
      id: crypto.randomUUID(),
    });
  };

  if (!location) {
    return (
      <>
        <h1>No seleccionaste ninguna habitación</h1>
        <p>Primero debés elegir una habitación para poder hacer una reserva.</p>
        <Link to="/habitaciones">Ver habitaciones</Link>
      </>
    );
  }

  if (reserva) {
    return (
      <div>
        <h1>¡Reserva recibida!</h1>
        <h2>Tu código de reserva es {reserva.id}</h2>
        <p>Habitación: {reserva.habitacion}</p>
        <p>
          En breve nos estaremos comunicando con vos para confirmar la reserva y
          brindarte los detalles de tu estadía.
        </p>
      </div>
    );
  }

  return (
    <div className="contenedor-reservar">
      <Link to="/habitaciones"><WiDirectionLeft />Volver</Link>
      <form className="form-reservar" onSubmit={handleSubmit(comprar)}>
        <h2>Reserva de Habitación</h2>

        <h3>Tipo de habitación</h3>
        <p>{location.titulo}</p>

        <h3>Fechas de estadía</h3>
        <label htmlFor="checkin">Fecha de entrada</label><br />
        <input
          type="date"
          id="checkin"
          name="checkin"
          {...register("entrada")}
        /><br /><br />

        <label htmlFor="checkout">Fecha de salida</label>
        <br />
        <input
          type="date"
          id="checkout"
          name="checkout"
          {...register("salida")}
        />

        <h3>Cantidad de huéspedes</h3>
        <label htmlFor="adultos">Número de adultos</label>
        <br />
        <input
          type="number"
          id="adultos"
          name="adultos"
          min="1"
          {...register("numAdultos")}
        /><br /><br />

        <label htmlFor="ninos">Número de niños</label><br />
        <input
          type="number"
          id="ninos"
          name="ninos"
          min="0"
          {...register("numNinos")}
        />

        <h3>Datos del huésped</h3>
        <label htmlFor="nombre">Nombre</label><br />
        <input type="text" id="nombre" name="nombre" {...register("nombre")} /><br /><br />

        <label htmlFor="apellido">Apellido</label><br />
        <input
          type="text"
          id="apellido"
          name="apellido"
          {...register("apellido")}
        /><br /><br />

        <label htmlFor="email">Correo electrónico</label><br />
        <input type="email" id="email" name="email" {...register("mail")} /><br /><br />

        <label htmlFor="telefono">Teléfono</label><br />
        <input
          type="tel"
          id="telefono"
          name="telefono"
          {...register("telefono")}
        />

        <h3>Hora aproximada de llegada</h3>
        <label htmlFor="llegada">Horario de llegada</label>
        <input
          type="time"
          id="llegada"
          name="llegada"
          {...register("horaLlegada")}
        />

        <h3>Solicitudes especiales</h3>
        <label htmlFor="comentarios">Comentarios o solicitudes</label>
        <textarea
          id="comentarios"
          name="comentarios"
          {...register("solicitudes")}
        ></textarea>

        <h3>Confirmación</h3>
        <label>
          <input type="checkbox" name="terminos" {...register("terminos")} />
          Acepto los términos y condiciones
        </label>

        <br />
        <br />

        <button type="submit">Confirmar reserva</button>
      </form>
    </div>
  );
};

export default Reservar;
