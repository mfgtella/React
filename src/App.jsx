import './App.css';
import CounterPage from './components/Counter/counter-page';
import Generation from './components/generation';
import Greeting from './components/greeting';
import { Footer, Navbar } from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CounterPage />
      {/* <Greeting />
      <Generation />
      <Footer /> */}
    </div>
  );
}

export default App;