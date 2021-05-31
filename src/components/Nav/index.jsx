import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Kalib's Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Nav