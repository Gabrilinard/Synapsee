import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";
import {
  Container,
  Title,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
  Message,
  HomeLink,
  RadioContainer,
  RadioLabel,
  RadioInput
} from './style'; 

const TornarEspecialistaPage = () => {
  const { user, tornarEspecialista, tornarOrganizador } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("especialista");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      if (email === user.email && password === user.password) {
        if (role === "especialista") {
          tornarEspecialista(email);
          setMessage("Agora você é um especialista!");
        } else if (role === "organizador") {
          tornarOrganizador(email);
          setMessage("Agora você é um organizador de eventos!");
        }
        navigate("/agendamentoEventos"); // Redireciona para a página de agendamento de eventos
      } else {
        setMessage("Email ou senha incorretos.");
      }
    } else {
      setMessage("Você precisa estar logado para se tornar especialista ou organizador.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Tornar-se Especialista ou Organizador</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Email:</Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Senha:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          <RadioContainer>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="especialista"
                checked={role === "especialista"}
                onChange={(e) => setRole(e.target.value)}
              />
              Especialista
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="organizador"
                checked={role === "organizador"}
                onChange={(e) => setRole(e.target.value)}
              />
              Organizador de Eventos
            </RadioLabel>
          </RadioContainer>
          <Button type="submit">Confirmar</Button>
        </Form>
        {message && <Message error={message === "Email ou senha incorretos." || message === "Você precisa estar logado para se tornar especialista ou organizador."}>{message}</Message>}
        {role === "organizador" && (
          <Button onClick={() => navigate("/criarEvento")}>Criar Evento</Button>
        )}
        <HomeLink to="/">Voltar para Home</HomeLink>
      </Container>
    </>
  );
};

export default TornarEspecialistaPage;
