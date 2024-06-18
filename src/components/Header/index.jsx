import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png";

function Header() {
  const { user } = useAuth();

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: '100%', padding: '10px' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ fontSize: '1.2rem' }}>

            {/* Links da navegação */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/DocumentList">Recursos</Nav.Link>
            <Nav.Link href="/Mapa">Mapa</Nav.Link>

            {/* Dropdown de Especialista */}
            <NavDropdown title="Especialista" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Agendamento">Buscar Especialista</NavDropdown.Item>
              {user && !user.especialista && (
                <NavDropdown.Item href="/Especialista">Torne-se Especialista</NavDropdown.Item>
              )}
            </NavDropdown>

            {/* Links adicionais */}
            <Nav.Link href="/Contato">Contato</Nav.Link>
            <Nav.Link href="/VerConsultas">Suas Consultas</Nav.Link>
          </Nav>

          {/* Ícone de usuário */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="/Usuario">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
                alt="User Icon"
                style={{ width: '30px', height: 'auto' }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
