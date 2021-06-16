import './App.css';
import './index.css'
import developer from './images/1280.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <div className="bg-black dark:bg-gray-800 p-3">
        <span className="text-white text-2xl">English 4 Developers</span>
      </div>
      <div className='h-screen bg-bottom text-left' style={{ backgroundImage: `url(${developer})` }}>
        <div>
          <p className='text-black text-5xl text-left w-96 p-12 ml-16'>Domine o Inglês e trabalhe de onde quiser.</p>
        </div>
        <button className='text-2xl bg-white rounded p-3 mt-32 ml-28'>Quero saber mais</button>
      </div>
    </div>
  );
}

export default App;
