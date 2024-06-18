import React from 'react';
import Header from '../../components/Header';
import { StyledContact, ContactForm, FormGroup, Label, Input, Textarea, SubmitButton } from './style';
import Footer from '../../components/Footer';

const Contato = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione lógica de envio aqui
        alert('Mensagem enviada!');
    };

    return (
        
        <>
        <Header />
        <StyledContact>
            <div className="content">
                <h1>Entre em Contato</h1>
                <p>Envie-nos uma mensagem e entraremos em contato o mais breve possível.</p>
                <ContactForm onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name">Nome:</Label>
                        <Input type="text" id="name" name="name" required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" id="email" name="email" required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="message">Mensagem:</Label>
                        <Textarea id="message" name="message" rows="4" required />
                    </FormGroup>
                    <SubmitButton type="submit">Enviar</SubmitButton>
                </ContactForm>
            </div>
            
        </StyledContact>
        <Footer />

        </>

    );
};

export default Contato;
