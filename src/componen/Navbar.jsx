import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Bell } from 'lucide-react';

const MotoNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="border-bottom border-secondary py-3">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center gap-2">
          <img 
            src="/mtLogos.png" 
            alt="MotoTelemetry Logo" 
            style={{ width: '40px', height: 'auto' }} 
          />
          <span className="ms-1">M-Tech</span>
        </Navbar.Brand>
        <Nav className="me-auto ms-4 gap-3">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'text-yellow border-bottom border-yellow' : ''}`}>Dashboard</NavLink>
          <NavLink to="/sessions" className={({ isActive }) => `nav-link ${isActive ? 'text-yellow border-bottom border-yellow' : ''}`}>Sessions</NavLink>
          <NavLink to="/analysis" className={({ isActive }) => `nav-link ${isActive ? 'text-yellow border-bottom border-yellow' : ''}`}>Analysis</NavLink>
          <NavLink to="/garage" className={({ isActive }) => `nav-link ${isActive ? 'text-yellow border-bottom border-yellow' : ''}`}>Garage</NavLink>
        </Nav>
        <div className="d-flex align-items-center gap-3">
          
          <div className="d-flex align-items-center gap-2 border-start ps-3 border-secondary">
            <div className="text-end">
              <div className="small fw-bold">Alex Racer</div>
              <div className="text-secondary" style={{fontSize: '10px'}}>Pro Account</div>
            </div>
            <img src="https://via.placeholder.com/35" className="rounded-circle" alt="user" />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MotoNavbar;