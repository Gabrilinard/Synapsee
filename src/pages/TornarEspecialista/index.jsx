import React, { useState } from "react";
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";

const TornarEspecialistaPage = () => {
  const { user, tornarEspecialista } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      if (email === user.email && password === user.password) {
        tornarEspecialista(email);
        setMessage("Agora você é um especialista!");
      } else {
        setMessage("Email ou senha incorretos.");
      }
    } else {
      setMessage("Você precisa estar logado para se tornar especialista.");
    }
  };

  return (
    <>
      <Header />
      <div>
        <br /><br /><br /><br /><br />
        <h1>Tornar-se Especialista</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Tornar-se Especialista</button>
        </form>
        {message && <p>{message}</p>}
        <Link to="/">Voltar para Home</Link>
      </div>
    </>
  );
};

export default TornarEspecialistaPage;
