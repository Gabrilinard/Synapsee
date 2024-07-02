import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import useAuth from "../../hooks/useAuth";
import Input from '../../components/Input';
import logo from '../../assets/logo2.jpg';
import loginImagem from '../../assets/ninos.jpg';
import logoReduzida from '../../assets/peca.png'

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #2D464F;

  .login-container {
    width: 100%;
    max-width: 900px;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    align-items: stretch;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .logo {
    width: 250px;
    transition: transform 0.5s ease;
  }

  .formLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-image {
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  .custom-btn {
    padding: 10px 20px;
    background-color: #343a40;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative;
    overflow: hidden;
    margin-top: 5px;
  }

  .custom-btn:hover {
    background-color: #ffc107;
  }

  .custom-btn span {
    z-index: 1;
    position: relative;
  }

  .custom-btn::before {
    content: "";
    position: absolute;
    background: url(${logo});
    background-size: cover;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  .custom-btn:hover::before {
    opacity: 1;
  }

  .input-container {
    width: 100%;
    max-width: 320px; /* Ajuste o tamanho máximo dos inputs conforme necessário */
  }

  .input-container input{
    width: 100%;
  }

  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .link-info {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .link-info:hover {
    color: #0056b3;
  }
`;

export default function Registro() {
    const [nome, setNome] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfig, setEmailConfig] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [showImage, setShowImage] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isImageRotating, setIsImageRotating] = useState(false);

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
        <StyledLogin>
            <MDBContainer fluid className="login-container">
                <MDBRow className="justify-content-center align-items-center w-100">
                    <MDBCol md="6" className="d-flex flex-column align-items-center formLogin">
                        <div className="logo-container">
                            <img src={logo} className="logo" alt="Logo" />
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Registro</h3>

                            <div className="input-container">
                                <Input wrapperClass='mb-4 w-100' label='Nome' id='nome' type='text' size="lg"
                                    value={nome} placeholder={"Digite seu nome"}
                                    onChange={(e) => setNome(e.target.value)} />
                            </div>

                            <div className="input-container">
                                <Input wrapperClass='mb-4 w-100' label='Localização' id='localizacao' type='text' size="lg"
                                    value={localizacao} placeholder={"Digite sua localização"}
                                    onChange={(e) => setLocalizacao(e.target.value)} />
                            </div>

                            <div className="input-container">
                                <Input wrapperClass='mb-4 w-100' label='Email' id='email' type='email' size="lg"
                                    value={email} placeholder={"Digite seu email"}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="input-container">
                                <Input wrapperClass='mb-4 w-100' label='Confirme seu email' id='confirmEmail' type='email' size="lg"
                                    value={emailConfig} placeholder={"Confirme seu email"}
                                    onChange={(e) => setEmailConfig(e.target.value)} />
                            </div>

                            <div className="input-container">
                                <Input wrapperClass='mb-4 w-100' label='Senha' id='senha' type='password' size="lg"
                                    value={senha} placeholder={"Digite sua senha"}
                                    onChange={(e) => setSenha(e.target.value)} />
                            </div>

                            {error && <p className="error-message">{error}</p>}

                        

                            <button
                                className="input-container"
                                onClick={handleSignup}
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
                                    backgroundColor: "#0047ab",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    marginTop: "5px",
                                    backgroundColor: isHovered ? '#ffc107' : '#343a40',
                                    color: '#fff',
                                    transition: 'background-color 0.3s ease',
                                    position: 'relative', // Posição relativa para posicionamento absoluto da imagem
                                }}
                            >
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

                            <p className="mt-3">
                                Já possui uma conta? <Link to='/Login' className="link-info">Faça login</Link>
                            </p>
                        </div>
                    </MDBCol>

                    <MDBCol md="6" className='d-none d-md-block px-0'>
                        <img
                            src={loginImagem}
                            alt="Login image"
                            className="w-100 login-image"
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </StyledLogin>
    );
}
