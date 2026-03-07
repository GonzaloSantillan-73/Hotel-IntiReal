import "../estilos/Habitaciones.css";
import ItemHabitaciones from "./ItemHabitaciones";

const Habitaciones = () => {
  const habitaciones = [
    {
      img: "habitacion-matrimonial.jpg",
      titulo: "Habitación Matrimonial/Single",
      descripcion:
        "Habitación cómoda y funcional pensada para parejas o viajeros individuales. Ofrece un ambiente cálido con detalles en madera y adobe, iluminación suave y mobiliario artesanal. Dispone de espacio bien distribuido, descanso confortable y servicios esenciales que garantizan una estadía práctica y agradable.",
      detalles: ["Baño privado", "Aire acondicionado", "WiFi", "Smart TV"],
      precio: 28000,
    },
    {
      img: "habitacion-doble-triple.jpg",
      titulo: "Habitación Doble/Triple",
      descripcion:
        "Espacio amplio diseñado para compartir en familia o con amigos. Cuenta con camas confortables, decoración rústica y ventanas que permiten buena iluminación natural. Su distribución favorece la comodidad y el descanso, integrando servicios modernos que aseguran una experiencia práctica y equilibrada.",
      detalles: ["Smart TV", "Baño privado", "Aire acondicionado", "WiFi"],
      precio: 25000,
    },
    {
      img: "habitacion-familiar.png",
      titulo: "Habitación Familiar",
      descripcion:
        "Habitación espaciosa pensada para grupos o familias que buscan comodidad y amplitud. Combina elementos rústicos con detalles modernos, generando un entorno funcional y armonioso. Dispone de camas amplias, buena circulación interna y servicios completos que brindan confort durante toda la estadía.",
      detalles: [
        "Hasta 5 personas",
        "Aire acondicionado",
        "TV Smart + WiFi",
        "Baño privado",
      ],
      precio: 45000,
    },
  ];

  return (
    <div>
      <div className="hero-habitaciones">
        <div>
          <h2>Nuestras Habitaciones</h2>
          <p>Disfrutá de habitaciones cálidas, camas cómodas y vistas únicas</p>
        </div>
      </div>
      <div className="contenedor-item-habitaciones">
        {habitaciones.map((hab, i) => (
          <ItemHabitaciones
            key={i}
            img={hab.img}
            titulo={hab.titulo}
            descripcion={hab.descripcion}
            detalles={hab.detalles}
            precio={hab.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default Habitaciones;
