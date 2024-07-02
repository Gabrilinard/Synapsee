import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { StyledExpertRegistration, ExpertForm, FormGroup, Label, Input, Textarea, SubmitButton } from './style';
import Footer from '../../components/Footer';
import useAuth from "../../hooks/useAuth";

const ExpertRegistration = () => {
    const navigate = useNavigate();
    const { user, tornarEspecialista } = useAuth();

    // Define o estado inicial para cada campo do formulário
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        cpf: '',
        birthDate: '',
        state: '',
        city: '',
        expertise: '',
        message: ''
    });

    // Atualiza o estado com os valores inseridos pelo usuário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione lógica de envio aqui, por exemplo, enviar para um servidor
        alert('Informações de parceiro enviadas!');

        // Tornar o usuário especialista
        tornarEspecialista(user.email);

        // Limpa os campos do formulário após o envio
        setFormValues({
            fullName: '',
            email: '',
            cpf: '',
            birthDate: '',
            state: '',
            city: '',
            expertise: '',
            message: ''
        });

        // Redirecionar para a página CriarEvento
        navigate('/CriarEvento');
    };

    return (
        <>
            <Header />
            <StyledExpertRegistration>
                <div className="content">
                    <h1>Torne-se um Parceiro</h1>
                    <p>Preencha o formulário abaixo para se cadastrar como um especialista em nossa plataforma.</p>
                    <ExpertForm onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="fullName">Nome Completo:</Label>
                            <Input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email:</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="cpf">CPF:</Label>
                            <Input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={formValues.cpf}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="birthDate">Data de Nascimento:</Label>
                            <Input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                value={formValues.birthDate}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="state">Estado:</Label>
                            <Input
                                type="text"
                                id="state"
                                name="state"
                                value={formValues.state}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="city">Cidade:</Label>
                            <Input
                                type="text"
                                id="city"
                                name="city"
                                value={formValues.city}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="expertise">Profissão:</Label>
                            <Textarea
                                id="expertise"
                                name="expertise"
                                rows="2"
                                value={formValues.expertise}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Sua proposta:</Label>
                            <Textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formValues.message}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <SubmitButton type="submit">Enviar</SubmitButton>
                    </ExpertForm>
                </div>
            </StyledExpertRegistration>
            <Footer />
        </>
    );
};

export default ExpertRegistration;
