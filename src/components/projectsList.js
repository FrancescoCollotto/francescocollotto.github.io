import ProjectCard from "./projectCard";
import './projectList.css';

const img = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"

const projects = [
  {
    img: img,
    title: "GemJunkies",
    description: "A full CRUD social network app where you can post your thoughts and stay connected with your friends.",
    repositoryURL: "https://github.com/FrancescoCollotto/acebook-ruby-junkies",
    technologies: "Ruby, Rails, Postgres, RSpec, Capybara, Bulma, Cloudinary",
    heroku: "http://gem-junkies.herokuapp.com"
  },
  {
    img: img,
    title: "Devote",
    description: "Money managing application that let you round up your everyday purchases to the nearest pound, implemented with Ruby on Rails API and React on the client side.",
    repositoryURL: "https://github.com/FrancescoCollotto/devote_frontend",
    technologies: "Javascript, React, Bootstrap, Ruby, Rails, Postgres",
  },
  {
    img: img,
    title: "MakersBnB",
    description: "A full CRUD AirBnB clone made with Ruby where you can signup and post your place to be booked by other users.",
    repositoryURL: "https://github.com/FrancescoCollotto/makersbnb",
    technologies: "Ruby, Sinatra, Postgres, RSpec, Capybara",
  },
  {
    img: img,
    title: "Daily news",
    description: "Single page web application to grab all the headlines from the Guardian newspaper API and display them on a page. Focus on DOM manipulation and OOP.",
    repositoryURL: "https://github.com/FrancescoCollotto/news-summary-challenge",
    technologies: "Javascript, Jest",
  }
]

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
