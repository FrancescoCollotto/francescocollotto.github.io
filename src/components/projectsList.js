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
        <p className="mt-5"><span className="fw-bold">What's next?: </span>I'm currently learning more React and advanced Javascript concepts 
          and incorporate them in a full CRUD web application using Express and MongoDB
        </p>
      </div>
      <h4 className="text-center mt-5">
        Check my <a href="https://github.com/FrancescoCollotto" target="_blank">Github</a> page for more projects
      </h4>
    </section>
  )
}

export default ProjectsList;
