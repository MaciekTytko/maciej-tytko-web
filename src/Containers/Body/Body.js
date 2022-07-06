import faceImage from '../../assets/images/PaintBrush.png'
import './Body.scss'

export default function Body() {
  return (
    <div className='master'>
      <h1>Maciej Tytko</h1>
      <h2>official site</h2>
      <div style={{
        display: 'flex',
        justifyContent: "center",
        height: '90%',
      }}>
        <div style={{
          color: 'white',
          padding: '2%',
          display: 'flex',
          justifyContent: 'left',
          flexDirection: 'column',
        }}>
          <p>Witaj na mojej stronie.</p>
          <p>Niżej, po bezwstydnej autopromocji, znajdują się ciekawe mini programy.</p>
          <p>   </p>
          <p>Jeżeli jesteś zainteresowany współpracą daj znać :)</p>
          <p>PS strona może nie za ładna ale za to własna bez szablonu</p>
        </div>
        <img
          src={faceImage}
          alt=""
          height={300}
        />
      </div>
      <div 
      style={{height: '10VH'}}/>
    </div>
  );
}