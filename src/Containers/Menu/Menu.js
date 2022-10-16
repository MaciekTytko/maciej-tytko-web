import './Menu.scss';
import Button from '@mui/material/Button';
import faceImage from '../../assets/images/PaintBrush.png'
import IconButton from '@mui/material/IconButton';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';


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
    <>
      <Profile show={menuExpanded} />
      <MenuExpandedTop horizontal={menuExpanded} />
    </>
  );
}

function Profile(props) {
  const navigator = useNavigate();
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={props.show}
      nodeRef={nodeRef}
      timeout={1000}
      unmountOnExit={true}
      classNames="menuExpanded">
      <div
        ref={nodeRef}
        className='menuExpanded'>
        < div className='menuMainPage' >
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
        </div >
      </div >
    </CSSTransition>
  )
}
function MenuExpandedTop(props) {
  const navigator = useNavigate();
  const location = useLocation();
  const nodeRef = useRef(null);

  const gotoMenu = () => {
    if (location.pathname !== '/menu') navigator('/menu');
    else navigator('/');
  };

  return (
    <CSSTransition
      in={!props.horizontal}
      nodeRef={nodeRef}
      timeout={1000}
      classNames="header">
      <div
        ref={nodeRef}
        className='header'>
        <IconButton color="primary" onClick={gotoMenu}>
          <NavLink to="/menu">
            <div className='menu-button'>
              <div className='line1'> </div>
              <div className='line2'> </div>
              <div className='line3'> </div>
            </div>
          </NavLink>
        </IconButton>
        <IconButton 
              className="image"
              color="primary" 
              onClick={()=>navigator('/')}>
          <div>
            <img
              src={faceImage}
              alt=""
              width={70}
            />
          </div>
        </IconButton>
      </div>
    </CSSTransition>
  )
}