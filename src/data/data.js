import { GiCoffeeCup } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaWaterLadder } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import { GiLotus } from "react-icons/gi";
/*
////////////////////////////////////////////
            HABITACIONES
////////////////////////////////////////////
*/
export const arrayHabitaciones = [
  {
    img: "habitacion-matrimonial.jpg",
    titulo: "Habitación Matrimonial/Single",
    descripcion:
      "Habitación cómoda y funcional pensada para parejas o viajeros individuales. Ofrece un ambiente cálido con detalles en madera y adobe, iluminación suave y mobiliario artesanal. Dispone de espacio bien distribuido, descanso confortable y servicios esenciales que garantizan una estadía práctica y agradable.",
    detalles: [
      "Baño privado",
      "Aire acondicionado",
      "WiFi",
      "Smart TV"],
    precio: 28000,
    max: 2
  },
  {
    img: "habitacion-doble-triple.jpg",
    titulo: "Habitación Doble/Triple",
    descripcion:
      "Espacio amplio diseñado para compartir en familia o con amigos. Cuenta con camas confortables, decoración rústica y ventanas que permiten buena iluminación natural. Su distribución favorece la comodidad y el descanso, integrando servicios modernos que aseguran una experiencia práctica y equilibrada.",
    detalles: [
      "Baño privado",
      "Aire acondicionado",
      "WiFi",
      "Smart TV"],
    precio: 25000,
    max: 3
  },
  {
    img: "habitacion-familiar.png",
    titulo: "Habitación Familiar",
    descripcion:
      "Habitación espaciosa pensada para grupos o familias que buscan comodidad y amplitud. Combina elementos rústicos con detalles modernos, generando un entorno funcional y armonioso. Dispone de camas amplias, buena circulación interna y servicios completos que brindan confort durante toda la estadía.",
    detalles: [
      "2 baños",
      "Aire acondicionado",
      "WiFi",
      "Smart TV"],
    precio: 45000,
    max:5
  },
];
/*
////////////////////////////////////////////
            TESTIMONIOS
////////////////////////////////////////////
*/
export const arrayTestimonios = [
  {
    nombre: "Silvia Ocampo",
    img: "/imagenes/persona1.webp",
    comentario:
      "Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable.",
  },
  {
    nombre: "Roberto Diaz",
    img: "/imagenes/persona2.jpg",
    comentario:
      "Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable.",
  },
  {
    nombre: "Ignacio Vega",
    img: "/imagenes/persona3.jpg",
    comentario:
      "Mi estancia en Hotel fue espectacular. El diseño del hotel, combinado con sus servicios de primera categoría, hicieron que fuera una experiencia verdaderamente relajante y agradable.",
  },
];
/*
////////////////////////////////////////////
            VALORES
////////////////////////////////////////////
*/
export const arrayValores = [
  {
    titulo: "Hospitalidad",
    icono: "/imagenes/icono-cultura.png",
    descripcion: "Atención cercana, personalizada y con calidez familiar.",
  },
  {
    titulo: "Identidad local",
    icono: "/imagenes/icono-hospitalidad.png",
    descripcion: "Celebramos nuestras raíces en cada espacio y servicio.",
  },
  {
    titulo: "Sustentabilidad",
    icono: "/imagenes/icono-sustentabilidad.png",
    descripcion:
      "Respetamos el entorno natural y promovemos prácticas ecológicas.",
  },
];
/*
////////////////////////////////////////////
            SERVICIOS
////////////////////////////////////////////
*/
export const arrayServicios = [
  {
    titulo: "Desayuno Artesanal",
    descripcion:
      "Disfrutá cada mañana de productos caseros, frutas frescas, etc.",
    icono: GiCoffeeCup,
  },
  {
    titulo: "Wi-Fi Gratis",
    descripcion:
      "Mantente conectado con internet de alta velocidad en todo el hotel.",
    icono: FaWifi,
  },
  {
    titulo: "Estacionamiento",
    descripcion:
      "Amplio espacio seguro para que estaciones con tranquilidad.",
    icono: FaCar,
  },
  {
    titulo: "Pileta / Jacuzzi",
    descripcion: "Relajate en nuestra piscina al aire libre.",
    icono: FaWaterLadder,
  },
  {
    titulo: "Restaurante",
    descripcion:
      "Recomendaciones personalizadas para que explores lo mejor de Tinogasta.",
    icono: IoRestaurant,
  },
  {
    titulo: "Espacios de Relajación",
    descripcion:
      "Patios internos y zonas de lectura para desconectar y descansar.",
    icono: GiLotus,
  },
];