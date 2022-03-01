const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5 fixed-top">
      <a className="navbar-brand" href="#">Francesco Collotto</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="navbar-nav">
              <a className="nav-item nav-link pl-lg-4" href="#">Skills</a>
              <a className="nav-item nav-link pl-lg-4" href="#">Portfolio</a>
              <a className="nav-item nav-link pl-lg-4" href="#">About</a>
              <a className="nav-item nav-link pl-lg-4" href="#">Contact</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;