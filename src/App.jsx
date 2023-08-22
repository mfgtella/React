import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import Generation from './components/generation';
import {Navbar, Footer} from './navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting/>
      <Generation/>
      <Footer/>
      
    </div>  
  );
}

export default App;
