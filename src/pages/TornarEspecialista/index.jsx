import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
  HomeLink
} from './style'; 

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
      <Container>
        <Title>Tornar-se Especialista</Title>
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
          <Button type="submit">Tornar-se Especialista</Button>
        </Form>
        {message && <Message error={message === "Email ou senha incorretos." || message === "Você precisa estar logado para se tornar especialista."}>{message}</Message>}
        <HomeLink to="/">Voltar para Home</HomeLink>
      </Container>
    </>
  );
};

export default TornarEspecialistaPage;
