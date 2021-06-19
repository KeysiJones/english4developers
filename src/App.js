import './App.css';
import './index.css'
import developer from './images/1280.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-left">
      <div className="bg-black dark:bg-gray-800 p-3">
        <span className="text-white text-2xl ml-28">English 4 Developers</span>
      </div>
      <div className='h-screen bg-bottom text-left' style={{ backgroundImage: `url(${developer})` }}>
        <div>
          <p className='text-black text-5xl text-left w-96 p-12 ml-16 leading-tight'>Domine o Inglês e trabalhe de onde quiser.</p>
        </div>
        <button className='text-2xl shadow-2xl bg-white rounded-lg p-3 mt-10 ml-28'>Quero saber mais</button>
      </div>
      <h2 className='text-center'>Testemunhos</h2>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner rounded-xl">
          <div class="text-center active carousel-item m-auto place-content-center">
            <div className=' m-2 p-2 bg-black text-white w-7/12 rounded text-center h-96'>
              <h3>Ola</h3>
            </div>
          </div>
          {/*<div class="text-center carousel-item m-auto place-content-center">
            <div className='m-2 p-2 bg-black text-white w-7/12 rounded text-center h-96'>
              Mundo
            </div>
          </div>
          <div class="text-center carousel-item m-auto place-content-center">
            <div className='m-2 p-2 bg-black text-white w-7/12 rounded text-center h-96'>
              Hahaha
            </div>
  </div>*/}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className='m-auto text-center flex place-content-center'>
        <div className='m-2 p-2 bg-black text-white w-60 rounded'>epa</div>
        <div className='m-2 p-2 bg-black text-white w-60 rounded'>epa</div>
        <div className='m-2 p-2 bg-black text-white w-60 rounded'>epa</div>
      </div>
    </div>
  );
}

export default App;
