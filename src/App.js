import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import About from './components/about';
import ProjectsList from './components/projectsList';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <ProjectsList />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
