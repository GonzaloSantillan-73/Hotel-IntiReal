import "../estilos/ImagenHero.css";

const ImagenHero = ({ img, tam, text }) => {

  const altura = tam === 100
    ? "calc(100vh - 80px)"
    : `${tam}vh`;

  const claseHero = tam === 100
    ? "div-hero hero-full"
    : "div-hero hero-variable";

  return (
    <div
      className={claseHero}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagenes/${img}')`,
        height: altura
      }}
    >
      <div>
        <h4>IntiReal</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImagenHero;