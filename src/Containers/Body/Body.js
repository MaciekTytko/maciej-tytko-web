import './Body.scss';
import Menu from '../Menu/Menu';
import MainPage from '../../Pages/MainPage/MainPage';
import AboutMe from '../../Pages/AboutMe/AboutMe';
import SiteMap from '../../Pages/SiteMap/SiteMap';
// import CV from '../../Pages/CV/CV';
// import NotFound404 from '../../Pages/NotFound404/NotFound404';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

export default function Body() {

  return (
    <Router>
      <div className='main'>
        <Menu />
        <Routes>
          <Route path="menu/*" element={<SiteMap />} />
          <Route path="aboutme/*" element={<AboutMe />} />
          <Route path="*/" element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}
