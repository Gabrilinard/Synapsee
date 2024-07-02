import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { StyledLogin } from "./style"; // Importando o estilo
import useAuth from "../../hooks/useAuth";
import Input from '../../components/Input';
import logo from '../../assets/logo2.jpg';
import logoReduzida from '../../assets/peca.png'
import loginImagem from '../../assets/ninas.jpg';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isImageRotating, setIsImageRotating] = useState(false);
    const [showImage, setShowImage] = useState(false);

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
        localStorage.setItem("nome_usuario", nome); // Armazena o nome do usuário no localStorage
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
    }, [email, senha, nome]); // Dependências para reavaliar o listener

    return (
        <StyledLogin>
            <MDBContainer fluid className="login-container">
                <MDBRow className="justify-content-center align-items-center w-100">
                    <MDBCol md="6" className="d-flex flex-column align-items-center formLogin">
                        <div className="logo-container">
                            <img src={logo} className="logo" alt="Logo" />
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Login</h3>

                            {/* Campo de Nome */}
                            <Input wrapperClass='mb-4 w-100' label='Nome' id='formControlLg' type='text' size="lg"
                                value={nome} placeholder={"Digite seu nome"}
                                onChange={(e) => { setNome(e.target.value); setError(""); }}
                            />

                            {/* Campos de Email e Senha */}
                            <Input wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"
                                value={email} placeholder={"Digite seu email"}
                                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                            />
                            <Input wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"
                                value={senha} placeholder={"Digite sua senha"}
                                onChange={(e) => { setSenha(e.target.value); setError(""); }}
                            />

                            {/* Exibição de Erro */}
                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            {/* Botão de Login */}
                            <button
                                className="custom-btn"
                                onClick={handleLogin}
                                onMouseEnter={() => {
                                    setIsHovered(true);
                                    setShowImage(true);
                                }}
                                onMouseLeave={() => {
                                    setIsHovered(false);
                                    setShowImage(false);
                                }}
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: isHovered ? '#ffc107' : '#343a40',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    marginTop: '5px',
                                    transition: 'background-color 0.3s ease',
                                    position: 'relative',
                                }}
                            >
                                {/* Ícone ao lado do botão */}
                                {showImage && (
                                    <img
                                        src={logoReduzida}
                                        alt="Login image"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            maxWidth: '40px',
                                            maxHeight: '40px',
                                        }}
                                    />
                                )}
                                <span style={{ opacity: showImage ? 0 : 1 }}>Entrar</span>
                            </button>

                            {/* Link para Registro */}
                            <p>
                                Não possui conta? <Link to='/Registro' className="link-info">Registre-se</Link>
                            </p>
                        </div>
                    </MDBCol>

                    {/* Imagem ao lado direito */}
                    <MDBCol md="6" className='d-none d-md-block px-0'>
                        <img
                            src={loginImagem}
                            alt="Login image"
                            className={`w-100 login-image ${isImageRotating ? 'rotate' : ''}`}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </StyledLogin>
    );
}
