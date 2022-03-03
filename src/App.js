import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <Projects />
    </div>
  );
}

export default App;
