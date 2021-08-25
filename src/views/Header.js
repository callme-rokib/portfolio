import { Link, NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header() {
  return (
    <Container className="border-bottom border-2">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-0">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4 fw-bold my-grey">
            <FontAwesomeIcon icon="globe" className="my-aqua me-xl-1" />
            ROKIB SITE
          </span>
        </Link>

        <ul className="nav nav-pills fw-bold">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/"
              className="nav-link"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="active" to="/about" className="nav-link">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              to="/experience"
              className="nav-link"
            >
              Experience
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              to="/interest"
              className="nav-link"
            >
              Interest
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="active" to="/award" className="nav-link">
              Award
            </NavLink>
          </li>
        </ul>
      </header>
    </Container>
  );
}

export default Header;
