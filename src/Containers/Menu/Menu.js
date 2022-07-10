import './Menu.scss';
import Button from '@mui/material/Button';
import faceImage from '../../assets/images/PaintBrush.png'
import IconButton from '@mui/material/IconButton';


export default function Menu() {

  return (
    <div className='menuExpanded'>
      <div className='menuMainPage'>
        <MenuExpandedTop />
        <Profile />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1 className='title'>Maciej Tytko</h1>
      <p>
        Jestem inżynierem i rysuję obrazki.
        Tworzę wizualizacje fabryk z możliwością podglądnięcia ich pracy. Dla menedżerów przygotowuję stosowne raporty.
        Po godzinach szerzę ideę grania bez prądu w stowarzyszeniu.
        Zastrzyk endorfin zapewniają mi przejażdżki rowerowe po okolicznych lasach.
      </p>
      <Button variant="contained">O mnie</Button>
    </div>
  )
}
function MenuExpandedTop() {
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
      <IconButton color="secondary">
      <div className='menu-button'>
        <div className='line1'> </div>
        <div className='line2'> </div>
        <div className='line3'> </div>
      </div>
      </IconButton>
      
    </div>
  )
}