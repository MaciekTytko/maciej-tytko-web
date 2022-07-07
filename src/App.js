import './App.scss';
import Footer from './Containers/Footer/Footer';
import Menu from './Containers/Menu/Menu';
import Header from './Containers/Header/Header';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
