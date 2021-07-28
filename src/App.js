import './App.css';
import './index.css'

function App() {
  const sendWppMessage = () => {
    window.open("https://wa.me/5551989061012?text=Olá Felipe ! quero saber mais sobre o seu curso de Inglês para devs.", '_blank')
  }
  return (
    <div className="grid">
      <div className="page-title">
        <span className="page-title-text">English 4 Developers</span>
      </div>
      <div id='hero' className='h-screen bg-left text-center'>
        <div>
          <p className='hero-text'>Domine o inglês e trabalhe de onde quiser.</p>
          <button onClick={sendWppMessage} className='btn-wpp'>Comece agora &darr;</button>
        </div>
      </div>
      <h2 id='comece-agora' className='text-center text-black text-5xl mb-12 mx-4'>Aprenda Inglês do conforto de sua casa</h2>
      <h2 className='text-center text-white text-4xl my-8 bg-green-400 p-3 relative'>Fica tranquilo, outras pessoas já fizeram o curso.</h2>
      <div id="carouselExampleIndicators" className="carousel slide mb-10" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner rounded-xl">
          <div className="text-center active carousel-item my-auto place-content-center">
            <div className='testimony-box'>
              <p className='testimony-box-text-1'>"Depois que eu comecei o curso do Deoly eu nunca mais tive medo de fazer uma entrevista em Inglês"</p>
              <p className='text-2xl my-4'>- Carlos Souza</p>
            </div>
          </div>
          <div className="text-center carousel-item my-auto place-content-center">
            <div className='testimony-box'>
              <p className='testimony-box-text-1'>"A didática do professor é a mais eficiente que eu já vi, com ele aprendi mais rápido"</p>
              <p className='text-2xl my-4'>- Amanda Da Silva</p>
            </div>
          </div>
          <div className="text-center carousel-item my-auto place-content-center">
            <div className='testimony-box'>
              <p className='testimony-box-text-1'>"2 semanas depois de ter terminado o curso eu consegui um emprego !!! o curso é demais."</p>
              <p className='text-2xl my-4'>- João Luz</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bg-green-400 p-6 rounded-lg" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon bg-green-400 p-6 rounded-lg" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default App;
