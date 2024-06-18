import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import { StyledRegistro } from "./style";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Registro() {
    const [nome, setNome] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfig, setEmailConfig] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { registro } = useAuth();

    const handleSignup = () => {
        setError("");

        if (!email || !emailConfig || !senha || !nome || !localizacao) {
            setError("Preencha todos os campos");
            return;
        }

        if (email !== emailConfig) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = registro(email, senha, nome, localizacao);

        if (res) {
            setError(res); 
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/"); 
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleSignup();
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [nome, localizacao, email, emailConfig, senha]); 

    return (
        <StyledRegistro>
            <div className="container">
                <div className="containerRegistro">
                    <h2 className="registro">Registro</h2>

                    <div className="registroItens required">
                        <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
                        <Input type="text" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} placeholder="Digite sua localização" />
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
                        <Input type="email" value={emailConfig} onChange={(e) => setEmailConfig(e.target.value)} placeholder="Digite seu email novamente" />
                        <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />
                        <Button onClick={handleSignup} Text="Registrar" />
                        <Link to='/Login'>Já tem conta?</Link>
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </StyledRegistro>
    );
}
