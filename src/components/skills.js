import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faGem } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import './skills.css';

const htmlIcon = <FontAwesomeIcon icon={faHtml5} size="2xl" className='html-icon'/>
const cssIcon = <FontAwesomeIcon icon={faCss3Alt} size="2xl" className='css-icon'/>
const jsIcon = <FontAwesomeIcon icon={faJs} size="2xl" className='js-icon'/>
const reactIcon = <FontAwesomeIcon icon={faReact} size="2xl" className='react-icon'/>
const nodeIcon = <FontAwesomeIcon icon={faNodeJs} size="2xl" className='node-icon'/>
const dbIcon = <FontAwesomeIcon icon={faDatabase} size="2xl" className='db-icon'/>
const gitIcon = <FontAwesomeIcon icon={faGitAlt} size="2xl" className='git-icon'/>
const gemIcon = <FontAwesomeIcon icon={faGem} size="2xl" className='gem-icon'/>


const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <h2 className="text-center fw-bold">Skills</h2>
      <div className="container">
      <h5 className="text-center my-5 text-decoration-underline">Technologies</h5>
        <div className="row gy-3 justify-content-center justify-content-lg-between">
          <div className="col-4 col-sm-2 col-lg-1 text-center">{htmlIcon}<br/>HTML</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{cssIcon}<br/>CSS</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{jsIcon}<br/>Javascript</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{reactIcon}<br/>React</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{nodeIcon}<br/>NodeJS</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{gemIcon}<br/>Ruby</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{gemIcon}<br/>Ruby on Rails</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{dbIcon}<br/>Postgres SQL</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{dbIcon}<br/>MongoDB</div>
          <div className="col-4 col-sm-2 col-lg-1 text-center">{gitIcon}<br/>Git</div>
        </div>
        <h5 className="text-center my-5 text-decoration-underline">Testing Frameworks</h5>
        <p className='text-center'>
          <strong>Ruby:</strong> Rspec, Capybara
        </p>
        <p className='text-center'>
          <strong>Javascript:</strong> Jest
        </p>
      </div>
    </section>
  )
}

export default Skills;
