import logo from './img/thetaalphastaglogotemp.jpg';
import './css/App.css';
/*LIBRARIES*/
import AOS from 'aos';
import 'aos/dist/aos.css';
/*END OF LIBRARIES*/
import Spacing from './Components/Spacing';
import Navbar from './Components/Navbar';


function App() {
  AOS.init()
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Spacing height="14"/>
        <h1 className="no-margin">ΘΑ</h1>
        <h2 className="no-margin">
          Theta Alpha<br/>
          Scottish Fraternity
        </h2>
        <Spacing height="1"/>
        <h3 className="no-margin">Est. 2017</h3>
        <Spacing height="5"/>
        <a href="#about" className='arrow'>
          <img className='animate__animated animate__bounce animate__infinite	infinite animate-delay-2s animate__slow animate__delay-2s' src="https://img.icons8.com/external-outline-astudio/64/FFFFFF/external-arrow-arrow-outline-astudio-28.png" alt='Down facing arrow'/>
        </a>
        <Spacing height="50"/>
      </header>
      <div id="about">
        <p data-aos="fade-down"
        data-aos-duration="750">
          Honor, Brotherhood, Scholarship</p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
        <p data-aos="fade-in-out" data-aos-duration="750">
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
        </p>
      </div>
    </div>
  );
}

export default App;
