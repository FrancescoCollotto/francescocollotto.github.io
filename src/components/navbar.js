import './navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ps-2 px-sm-5 fixed-top">
      <a className="navbar-brand d-none d-sm-block" href="#">FRANCESCO COLLOTTO</a>
      <a className="navbar-brand d-block d-sm-none" href="#">FC</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="navbar-nav">
              <a className="nav-item nav-link pl-lg-4" href="#">About</a>
              <a className="nav-item nav-link pl-lg-4" href="#">Projects</a>
              <a className="nav-item nav-link pl-lg-4" href="#">Skills</a>
              <a className="nav-item nav-link pl-lg-4" href="#">Contact</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;