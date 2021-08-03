import "./App.css";
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonyBoxText from "./components/TestimonyBoxText";
import TestimonyBox from "./components/TestimonyBox";

const numeroCelular = process.env.REACT_APP_NUMERO_CELULAR;

function App() {
  const sendWppMessage = () => {
    window.open(
      `https://wa.me/55${numeroCelular}?text=Olá Felipe ! quero saber mais sobre o seu curso de Inglês para devs.`,
      "_blank"
    );
  };
  return (
    <div className="grid">
      <div className="page-title">
        <span className="page-title-text">English 4 Developers</span>
      </div>
      <div id="hero" className="h-full bg-left text-center">
        <div className="text-center mx-auto">
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
      <Carousel showThumbs={false} showStatus={false}>
        <TestimonyBox>
          <TestimonyBoxText
            testimony='"Depois que eu comecei o curso do Deoly eu nunca mais tive medo de
            fazer uma entrevista em Inglês"'
            author="Cintia Ferreira"
          />
        </TestimonyBox>
        <TestimonyBox>
          <TestimonyBoxText
            testimony='"2 semanas depois de ter terminado o curso eu consegui um emprego
            !!! o curso é demais."'
            author="Carlos Souza"
          />
        </TestimonyBox>
        <TestimonyBox>
          <TestimonyBoxText
            testimony='"A didática do professor é a mais eficiente que eu já vi, com ele
            aprendi mais rápido"'
            author="Débora Santos"
          />
        </TestimonyBox>
      </Carousel>
    </div>
  );
}

export default App;
