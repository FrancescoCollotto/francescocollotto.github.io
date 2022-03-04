import ProjectCard from "./projectCard";
import './projectList.css';
import projects from '../projectsDetails';


const projectsElement = projects.map((project) => {
  return <ProjectCard 
    img={project.img} 
    title={project.title} 
    description={project.description} 
    repositoryURL={project.repositoryURL}
    technologies={project.technologies} 
    heroku={project.heroku}
  />
})

const ProjectsList = () => {
  
  return (
    <section id="projects" className="py-5">
      <h1 className='text-center fw-bold mb-5'>Projects</h1>
      <div class="container">
        <div class="row gy-5">
          {projectsElement}
        </div>
      </div>
    </section>
  )
}

export default ProjectsList;
