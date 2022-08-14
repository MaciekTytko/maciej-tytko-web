
import Menu from '../Menu/Menu';
import MainPage from '../../Pages/MainPage/MainPage';
import './Body.scss';
import SiteMap from '../../Pages/SiteMap/SiteMap';
import CV from '../../Pages/CV/CV';

export default function Body() {

  return (
    <div className='main'>
      <Menu />
      {/* <MainPage /> */}
      <SiteMap/>
    </div>
  );
}
