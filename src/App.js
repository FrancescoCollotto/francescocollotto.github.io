import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import About from './components/about';
import ProjectsList from './components/projectsList';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <ProjectsList />
      <Skills />
    </div>
  );
}

export default App;
