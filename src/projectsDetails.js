import gemJunkiesImg from './gemJunkies.png';
import devoteImg from './devote.png';
import makersBnbImg from './makersBnB.png';
import guardianImg from './news.png';

const projects = [
  {
    key: 1,
    img: gemJunkiesImg,
    title: "GemJunkies",
    description: "A full CRUD social network app where you can post your thoughts and stay connected with your friends.",
    repositoryURL: "https://github.com/FrancescoCollotto/acebook-ruby-junkies",
    technologies: "Ruby, Rails, Postgres, RSpec, Capybara, Bulma, Cloudinary",
    heroku: "http://gem-junkies.herokuapp.com"
  },
  {
    key: 2,
    img: devoteImg,
    title: "Devote",
    description: "Money managing application that let you round up your everyday purchases to the nearest pound, implemented with Ruby on Rails API and React on the client side.",
    repositoryURL: "https://github.com/FrancescoCollotto/devote_frontend",
    technologies: "Javascript, React, Bootstrap, Ruby, Rails, Postgres",
  },
  {
    key: 3,
    img: makersBnbImg,
    title: "MakersBnB",
    description: "A full CRUD AirBnB clone made with Ruby where you can signup and post your place to be booked by other users.",
    repositoryURL: "https://github.com/FrancescoCollotto/makersbnb",
    technologies: "Ruby, Sinatra, Postgres, RSpec, Capybara",
  },
  {
    key: 4,
    img: guardianImg,
    title: "Daily news",
    description: "Single page web application to grab all the headlines from the Guardian newspaper API and display them on a page. Focus on DOM manipulation and OOP.",
    repositoryURL: "https://github.com/FrancescoCollotto/news-summary-challenge",
    technologies: "Javascript, Jest",
  }
]

export default projects;