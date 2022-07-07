
import Button from '@mui/material/Button';
import faceImage from '../../assets/images/PaintBrush.png'
import './Header.scss'

export default function Body() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='left'>
          <h1>Maciej Tytko</h1>
          <h2>official site</h2>
          <p>Witaj na mojej stronie.</p>
          <p>Niżej, po bezwstydnej autopromocji, znajdują się ciekawe mini programy.</p>
          <p>   </p>
          <p>Jeżeli jesteś zainteresowany współpracą daj znać :)</p>
          <p>PS strona może nie za ładna ale za to własna bez szablonu</p>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div className='right'>
          <img
            className='image'
            src={faceImage}
            alt=""
          />
        </div>
      </div>
      <div
        style={{ height: '10VH' }} />
    </div>
  );
}