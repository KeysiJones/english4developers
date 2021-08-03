import "./App.css";
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  const sendWppMessage = () => {
    window.open(
      "https://wa.me/5551989061012?text=Olá Felipe ! quero saber mais sobre o seu curso de Inglês para devs.",
      "_blank"
    );
  };
  return (
    <div className="grid">
      <div className="page-title">
        <span className="page-title-text">English 4 Developers</span>
      </div>
      <div id="hero" className="h-screen bg-left text-center">
        <div>
          <p className="hero-text">
            Domine o inglês e trabalhe de onde quiser.
          </p>
          <button onClick={sendWppMessage} className="btn-wpp">
            Comece agora &darr;
          </button>
        </div>
      </div>
      <h2
        id="comece-agora"
        className="text-center text-black text-5xl mb-12 mx-4"
      >
        Aprenda Inglês do conforto de sua casa
      </h2>
      <h2 className="text-center text-white text-4xl my-8 bg-green-400 p-3 relative">
        Fica tranquilo, outras pessoas já fizeram o curso.
      </h2>
      <div className="text-center m-auto justify-center">
        <Carousel showThumbs={false} showStatus={false}>
          <div className="testimony-box">
            <p className="testimony-box-text-1">
              "Depois que eu comecei o curso do Deoly eu nunca mais tive medo de
              fazer uma entrevista em Inglês"
            </p>
            <p className="text-2xl my-4">- Cintia Ferreira</p>
          </div>
          <div className="testimony-box">
            <p className="testimony-box-text-1">
              "2 semanas depois de ter terminado o curso eu consegui um emprego !!! o curso é demais.""
            </p>
            <p className="text-2xl my-4">- Carlos Souza</p>
          </div>
          <div className="testimony-box">
            <p className="testimony-box-text-1">
              "A didática do professor é a mais eficiente que eu já vi, com ele aprendi mais rápido"
            </p>
            <p className="text-2xl my-4">- Débora Santos</p>
          </div>
          {/* <div className="testimony-box">
            <p className="testimony-box-text-1">
              "Depois que eu comecei o curso do Deoly eu nunca mais tive medo de
              fazer uma entrevista em Inglês"
            </p>
            <p className="text-2xl my-4">- Carlos Souza</p>
          </div>
          <div className="testimony-box">
            <p className="testimony-box-text-1">
              "Depois que eu comecei o curso do Deoly eu nunca mais tive medo de
              fazer uma entrevista em Inglês"
            </p>
            <p className="text-2xl my-4">- Carlos Souza</p>
          </div>
          <div className="testimony-box">
            <p className="testimony-box-text-1">
              "Depois que eu comecei o curso do Deoly eu nunca mais tive medo de
              fazer uma entrevista em Inglês"
            </p>
            <p className="text-2xl my-4">- Carlos Souza</p>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
