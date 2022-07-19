import { Outlet, Link } from "react-router-dom"
import '../css/navbar.css';

const Layout = () => {

return(

<div className="App">
  <header className="App-header">
    <div id="navbar">
      <nav className="navbar-items">
        <span className="pointer navbar-item" class="navbar-item"><Link to="/" style={{ textDecoration: 'none', color: '#adb1c9' }}>About</Link></span>
        <span className="pointer navbar-item" class="navbar-item"><Link to="brothers" style={{ textDecoration: 'none' , color: '#adb1c9' }}>Our Brothers</Link></span>
        <span className="pointer navbar-item" class="navbar-item"><Link to="events" style={{ textDecoration: 'none', color: '#adb1c9'  }}>Events</Link></span>
        <span className="pointer navbar-item" class="navbar-item"><Link to="contact" style={{ textDecoration: 'none', color: '#adb1c9'  }}>Contact</Link></span>
      </nav> 
    </div>
  </header>

  <Outlet />

</div>

)

}

export default Layout;