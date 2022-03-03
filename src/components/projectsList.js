import ProjectCard from "./projectCard";
const img = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
const projects = [
  {
    img: img,
    title: "GemJunkies",
    description: "A social network app where you can post your thoughts and stay connected with your friends",
    repositoryURL: "https://github.com/FrancescoCollotto/acebook-ruby-junkies",
  },
  {
    img: img,
    title: "GemJunkies",
    description: "A social network app where you can post your thoughts and stay connected with your friends",
    repositoryURL: "https://github.com/FrancescoCollotto/acebook-ruby-junkies",
  },
  {
    img: img,
    title: "GemJunkies",
    description: "A social network app where you can post your thoughts and stay connected with your friends",
    repositoryURL: "https://github.com/FrancescoCollotto/acebook-ruby-junkies",
  },
  {
    img: img,
    title: "GemJunkies",
    description: "A social network app where you can post your thoughts and stay connected with your friends",
    repositoryURL: "https://github.com/FrancescoCollotto/acebook-ruby-junkies",
  }
]

const projectsElement = projects.map((project) => {
  return <ProjectCard 
    img={project.img} 
    title={project.title} 
    description={project.description} 
    repositoryURL={project.repositoryURL} 
  />
})

const ProjectsList = () => {
  
  return (
    <section id="projects" className="py-5">
      <h1 className='text-center fw-bold mb-5'>Projects</h1>
      <div class="container">
        <div class="row">
          {projectsElement}
        </div>
      </div>
    </section>
  )
}

export default ProjectsList;
