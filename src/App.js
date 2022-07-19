import logo from './img/thetaalphastaglogotemp.jpg';
import './css/App.css';
/*LIBRARIES*/
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*END OF LIBRARIES*/
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Brothers from "./Pages/Brothers";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";



function App() {
  AOS.init()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brothers" element={<Brothers />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
