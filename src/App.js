import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
    </div>
  );
}

export default App;
