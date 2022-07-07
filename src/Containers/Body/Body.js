import Button from '@mui/material/Button';
import './Body.scss';
import faceImage from '../../assets/images/PaintBrush.png'

export default function Body() {



  return (
    <div className='h-100 main'>
      <div className='div1'>
        <div className='header'>
          <div className='logo'>
            <img
              className='image'
              src={faceImage}
              alt=""
              width={100}
            />
          </div>
          <div className='menu-button'>          </div>
        </div>
        <div>
          <h1>Maciej Tytko</h1>
          <h2>official site</h2>
          <p>Witaj na mojej stronie.</p>
          <p>Oprócz bezwstydnej autopromocji, znajdują się ciekawe mini programy.</p>
          <p>   </p>
          <p>PS strona może nie za ładna, ale za to własna bez szablonu</p>
          <Button variant="contained">O mnie</Button>
        </div>
      </div>
      <div className='div2'>
        <h1 className='element'>Więcej o mnie</h1>
      </div>
      <div className='div3'>
        <h1 className='element'>Sprawdź puzzle</h1>
      </div>
    </div>
  );
}
