import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo2.jpg";
import { Link } from 'react-router-dom';


function Header() {
  const { user } = useAuth();

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: '100%', padding: '10px' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: '170px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ fontSize: '1.2rem' }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/DocumentList">Terapia Ocupacional</Nav.Link>
            <NavDropdown title="Eventos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Agendamento">Buscar Eventos</NavDropdown.Item>
              {!user?.especialista && (
                <NavDropdown.Item href="/Contato">Tornar-se Parceiro</NavDropdown.Item>
              )}
              {user?.especialista && (
                <NavDropdown.Item href="/CriarEvento">Criar/Ajustar Evento</NavDropdown.Item>
              )}
              <NavDropdown.Item href="/EventosInscritos">Eventos Inscritos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Duvidas">Dúvidas Frequentes</Nav.Link>
            <Nav.Link href="/Documentos">Documentos</Nav.Link>
            <Nav.Link href="/VerConsultas">Saiba Mais</Nav.Link>
          </Nav>
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
