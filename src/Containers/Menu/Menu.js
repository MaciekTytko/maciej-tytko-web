import './Menu.scss';
import Button from '@mui/material/Button';
import faceImage from '../../assets/images/PaintBrush.png'
import IconButton from '@mui/material/IconButton';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Menu() {
  const [menuExpanded, setMenuExpanded] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // use 4 (1/3 screen) in menu and mainpage, otherwise 1
    switch (location.pathname) {
      case '/': setMenuExpanded(true); break;
      case '/menu': setMenuExpanded(true); break;
      default: setMenuExpanded(false);
    }
  }, [location])

  return (
      <div className='menuExpanded'>
        < div className='menuMainPage' >
          <Profile />
        </div >
      </div >
  );
}

function Profile() {
  const navigator = useNavigate();
  return (
    <div>
      <h1 className='title'>Maciej Tytko</h1>
      <p>
        Jestem inżynierem i rysuję obrazki.
        Tworzę wizualizacje fabryk z możliwością podglądnięcia ich pracy. Dla menedżerów przygotowuję stosowne raporty.
        Po godzinach szerzę ideę grania bez prądu w stowarzyszeniu.
        Zastrzyk endorfin zapewniają mi przejażdżki rowerowe po okolicznych lasach.
      </p>
      <Button variant="contained" onClick={() => navigator('/aboutme')}>O mnie</Button>
    </div>
  )
}
function MenuExpandedTop() {
  const navigate = useNavigate();
  const location = useLocation();
  const gotoMenu = () => {
    if (location.pathname !== '/menu') navigate('/menu');
    else navigate('/');
  };
  return (
    <div className='header'>
      <div className='logo'>
        <img
          className='image'
          src={faceImage}
          alt=""
          width={70}
        />
      </div>
      <IconButton color="secondary" onClick={gotoMenu}>
        <NavLink to="/menu">
          <div className='menu-button'>
            <div className='line1'> </div>
            <div className='line2'> </div>
            <div className='line3'> </div>
          </div>
        </NavLink>
      </IconButton>
    </div>
  )
}