import './App.css';
import './index.css'
import developer from './images/1280.jpg'

function App() {
  const sendWppMessage = () => {
    window.open("https://wa.me/5551989061012?text=Olá Felipe ! quero saber mais sobre o seu curso de Inglês para devs.", '_blank')
  }
  return (
    <div className="md:min-h-screen md:text-left sm:grid flow-root">
      <div className="bg-green-400 dark:bg-gray-800 p-3 text-center sm:text-left">
        <span className="text-white sm:text-2xl text-3xl sm:ml-32 mx-auto relative font-bold">English 4 Developers</span>
      </div>
      <div id='hero'className='h-screen bg-left text-center' style={{ backgroundImage: `url(${developer})` }}>
        <div>
          <p className='text-green-500 mx-auto mt-10 mb-20 sm:text-5xl font-size-8 sm:text-6xl text-left sm:w-96 w-96 sm:p-12 px-10 py-2 sm:ml-32 sm:mt-10 leading-tight relative'>Domine o Inglês e trabalhe de onde quiser.</p>
          <button onClick={sendWppMessage} className='sm:text-2xl text-3xl font-bold sm:absolute shadow-2xl bg-green-400 text-white rounded-lg p-3 mt-10 sm:ml-36 m-auto'>Quero saber mais !</button>
        </div>
      </div>
      <h2 className='text-center text-black text-5xl mb-12 mx-4'>Aprenda Inglês do conforto de sua casa</h2>
      <h2 className='text-center text-white text-4xl my-8 bg-green-400 p-3 relative'>Fica tranquilo, outras pessoas já fizeram o curso.</h2>
      <div id="carouselExampleIndicators" className="carousel slide mb-10" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner rounded-xl">
          <div className="text-center active carousel-item my-auto place-content-center">
            <div className='m-2 p-2 bg-green-400 block text-white w-80 sm:w-7/12 rounded-3xl text-center h-96'>
              <p className='sm:mx-20 text-3xl mt-10 w-full sm:mt-20'>"Depois que eu comecei o curso do Deoly eu nunca mais tive medo de fazer uma entrevista em Inglês"</p>
              <p className='text-2xl sm:mt-14 mt-6'>- Camila Santos</p>
              <p className='text-lg'>Desenvolvedora backend</p>
            </div>
          </div>
          <div className="text-center carousel-item m-auto place-content-center">
            <div className='m-2 p-2 bg-green-400 block text-white w-80 sm:w-7/12 rounded-3xl text-center h-96'>
              <p className='sm:mx-20 text-3xl mt-10 w-full sm:mt-20'>"Depois que eu comecei o curso do Deoly eu nunca mais tive medo de fazer uma entrevista em Inglês"</p>
              <p className='text-2xl sm:mt-14 mt-6'>- Camila Santos</p>
              <p className='text-lg'>Desenvolvedora backend</p>
            </div>
          </div>
          <div className="text-center carousel-item m-auto place-content-center">
            <div className='m-2 p-2 bg-green-400 block text-white w-80 sm:w-7/12 rounded-3xl text-center h-96'>
              <p className='sm:mx-20 text-3xl mt-10 w-full sm:mt-20'>"Depois que eu comecei o curso do Deoly eu nunca mais tive medo de fazer uma entrevista em Inglês"</p>
              <p className='text-2xl sm:mt-14 mt-6'>- Camila Santos</p>
              <p className='text-lg'>Desenvolvedora backend</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bg-green-400 p-6 rounded-lg" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon bg-green-400 p-6 rounded-lg" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <div className='m-auto text-center flex place-content-center'>
        <div className='m-2 p-2 bg-black text-white w-60 rounded'>epa</div>
        <div className='m-2 p-2 bg-black text-white w-60 rounded'>epa</div>
        <div className='m-2 p-2 bg-black text-white w-60 rounded'>epa</div>
      </div> */}
    </div>
  );
}

export default App;
