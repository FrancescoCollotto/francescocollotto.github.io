import './about.css'
import profilePic from '../profile-pic.jpg';

const About = () => {
  return (
    <section id='about'>
      <h1 className='text-center fw-bold mb-5'>About Me</h1>
      <div className="container">
        <div className="row gy-5">
          <div className="col-sm-12 col-md-3">
            <img className='img-fluid rounded' src={profilePic}></img>
          </div>
          <div className="col-sm-12 col-md-8">
          <p className='px-lg-5'>
              Hello World! Like most of the beginners that was the first line of code I wrote about 12 months ago, 
              I immediately fell in love with the endless possibilities of programming and since then I started my coding
              journey through self-directed learning with the basics of HTML, CSS and JS. In November '21 I decided to take
              the next step forward and I joined <a href="https://www.makers.tech/">Makers Academy</a>, a 16-week intensive coding bootcamp, where I learned to code with 
              Ruby, Rails, SQL databases, Javascript, NodeJS. I became well-versed in Object-Oriented-Programming, Test-Driven-Development 
              and working through agile methodologies with daily stand-up during group projects and weekly retrospective throughout
              the course.<br />
              I am looking for a great place to bring my passion and dedication into my first role in tech. In my dream job 
              I would be surrounded by awesome developers that could guide and mentor me to improve my skills and become a great professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
