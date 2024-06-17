import React, { useState } from "react";
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
        setError(""); // Limpa qualquer erro anterior ao tentar registrar

        // Validação dos campos obrigatórios
        if (!email || !emailConfig || !senha || !nome || !localizacao) {
            setError("Preencha todos os campos");
            return;
        }

        // Validação de emails iguais
        if (email !== emailConfig) {
            setError("Os e-mails não são iguais");
            return;
        }

        // Chamada à função de registro
        const res = registro(email, senha, nome, localizacao);

        if (res) {
            setError(res); // Exibe mensagem de erro retornada pela função de registro
            return;
        }

        // Registro bem-sucedido
        alert("Usuário cadastrado com sucesso!");
        navigate("/"); // Redireciona para a página inicial após o registro
    }

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
