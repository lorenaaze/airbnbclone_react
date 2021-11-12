import React from 'react';
import './App.css';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/">AirBnB Clone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Página inicial</Nav.Link>
                <Nav.Link as={NavLink} to="/locacao">Veja nossas ofertas</Nav.Link>
                <Nav.Link as={NavLink} to="/reserva">Faça sua reserva</Nav.Link>
                <Nav.Link as={NavLink} to="/cadastro">Seja um anfitrião</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>

      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p></p>
      </footer>
    </>
  );
}

export default App;

// <nav>
//           <Link to="/">Página inicial</Link> | {' '}
//           <Link to="/locacao">Veja nossas ofertas</Link> | {' '}
//           <Link to="/reserva">Faça uma reserva</Link> | {' '}
//           <Link to="/cadastro">Seja um anfitrião</Link> 
//         </nav>