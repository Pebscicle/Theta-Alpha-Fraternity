import About from '../Components/About';
import Spacing from '../Components/Spacing';

const Home = () => {
    return (
      <>
      <header className="App-title">
        <Spacing height="14" />
        <h1 className="no-margin">ΘΑ</h1>
        <h2 className="no-margin" style={{textAlign:"center",}}>
          Theta Alpha
          <br/>
          Scottish Fraternity
        </h2>
        <Spacing height="1" />
        <h3 className="no-margin">Est. 2017</h3>
        <Spacing height="5" />
        <a href="#about" className='arrow'>
          <img className='animate__animated animate__bounce animate__infinite	infinite animate-delay-2s animate__slow animate__delay-2s' src="https://img.icons8.com/external-outline-astudio/64/FFFFFF/external-arrow-arrow-outline-astudio-28.png" alt='Down facing arrow' />
        </a>
        <Spacing height="10" />
      </header><div id="about">

        <p data-aos="fade-down"
          data-aos-duration="750" style={{textAlign: 'center'}}>
          Honor, Brotherhood, Scholarship</p>
        <About />
        </div>
        </>
    )
  }

export default Home;