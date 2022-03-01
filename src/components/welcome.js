import './welcome.css';

const Welcome = () => {
  return (
    <section id="welcome-section" className="container-fluid">
      <div className="row h-100 justify-content-center">
          <div className="col-md-10 my-auto">
              <h1 className="welcome-name"><span id="hi-there"><span className="orange">&lt;</span>HI THERE!<span className="orange">&gt;</span></span>, I'm Francesco</h1>
              <p id="p2">Full-Stack Software Developer</p>
          </div>
      </div>
    </section>      
  )
}

export default Welcome;