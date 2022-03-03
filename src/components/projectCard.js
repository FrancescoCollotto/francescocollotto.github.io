import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const githubIcon = <FontAwesomeIcon icon={faGithubSquare} size="2xl"/>

const ProjectCard = ({img, title, description, repositoryURL}) => {
  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div className="card">
        <img src={img} className="card-img-top" alt="project" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={repositoryURL} className="card-link link-dark">{githubIcon}</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;