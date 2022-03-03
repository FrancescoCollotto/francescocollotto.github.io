import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './projectCard.css';

const githubIcon = <FontAwesomeIcon icon={faGithubSquare}/>

const ProjectCard = ({img, title, description, repositoryURL, technologies, heroku}) => {
  const herokuLink = heroku ? <a href={heroku} target="_blank" className="card-link link-dark"><i className='icon'></i></a> : '';
  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="project" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{technologies}</h6>
          <p className="card-text">{description}</p>
        </div>
        <div className='card-footer'>
            <a href={repositoryURL} target="_blank" className="card-link link-dark">{githubIcon}</a>
            {herokuLink}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;