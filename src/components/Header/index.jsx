import React, { useContext } from 'react';
import { StyledHeader } from './styles';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <StyledHeader>
      <nav className="NavBar">
        <ul className="NavBarItem">
          <li className="NavItens"><Link to="/">Home</Link></li>
          <li className="NavItens"><Link to="/Contato">Contato</Link></li>
          <li className="NavItens"><Link to="/Agendamento">Agendamento</Link></li>
          <li className="NavItens"><Link to="/Mapa">Mapa</Link></li>
          <li className="NavItens"><Link to="/VerConsultas">Suas Consultas</Link></li>
          {user && user.especialista && (
            <li className="NavItens">
              <Link to="/EspecialistaDashboard">Especialista Dashboard</Link>
            </li>
          )} : {
            !user.especialista && (
              <li className="NavItens">
              <Link to="/Especialista">Torne-se Especialista</Link>
            </li>
            )
          }
          <li className="NavItens">
            <Link to="/Usuario">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt=""
                width={"35px"}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
