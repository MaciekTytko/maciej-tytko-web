import './App.scss';
import Body from './Containers/Body/Body';
import Footer from './Containers/Footer/Footer';
import Menu from './Containers/Menu.js/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
