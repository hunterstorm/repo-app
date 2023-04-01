import react from "react";
import {Link} from 'react-router-dom';  
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

function Navigation() {
  return (
    <Navbar className="navbar" expand="lg" style={{ justifyContent: 'flex-end' }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/app" className="nav-link">App</Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default  Navigation
