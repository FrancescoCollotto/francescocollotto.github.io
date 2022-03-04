import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import About from './components/about';
import ProjectsList from './components/projectsList';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <ProjectsList />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
