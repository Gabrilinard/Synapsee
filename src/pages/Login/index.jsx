import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyledLogin } from "./style";
import useAuth from "../../hooks/useAuth";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        setError(""); // Limpa qualquer erro anterior ao tentar fazer login

        // Validação dos campos obrigatórios
        if (!email || !senha) {
            setError("Preencha todos os campos");
            return;
        }

        // Chamada à função de login
        const res = login(email, senha);

        if (res) {
            setError(res); // Exibe mensagem de erro retornada pela função de login
            return;
        }

        // Login bem-sucedido
        navigate("/");
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleLogin();
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [email, senha]); // Dependências para reavaliar o listener

    return (
        <StyledLogin>
            <div className="container">
                <div className="containerLogin">
                    <h2 className="login">Login</h2>

                    <div className="loginItens">
                        <Input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        />
                        <Input
                            type="password"
                            value={senha}
                            placeholder="Digite sua senha"
                            onChange={(e) => { setSenha(e.target.value); setError(""); }}
                        />
                        {error && <p>{error}</p>}
                        <Button type="button" Text="Entrar" onClick={handleLogin} />
                        Não tem conta? <Link to='/Registro'>Registre-se</Link>
                    </div>
                </div>
            </div>
        </StyledLogin>
    );
}
