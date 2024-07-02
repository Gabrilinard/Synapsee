import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, ContentWrapper, ImageContainer, TextContainer, Title, Paragraph, Section, List } from './style';
import QuebraCabeca from "../../assets/quebra.jpg";

const SaibaMais = () => {
    return (
        <>
            <Header />
            <Container>
                <ContentWrapper>
                    <ImageContainer>
                        <img src={QuebraCabeca} alt="Quebra-cabeça" />
                    </ImageContainer>
                    <TextContainer>
                        <Section>
                            <Title>Sobre Nós</Title>
                            <Paragraph>
                                Este site foi criado com o propósito de ser uma fonte educacional e informativa para pessoas autistas, suas famílias e professores. Nós fomos encorajados pela diversidade, potencial e possibilidades infinitas de pessoas autistas. Acreditamos que a educação e a inclusão são necessárias para tornar o mundo mais empático e amigável.
                            </Paragraph>
                        </Section>
                        <Section>
                            <Title>Nossa Missão</Title>
                            <Paragraph>
                                É proporcionar recursos de educação de qualidade, aumentar a compreensão do autismo e dirigir o desenvolvimento de habilidades desde uma idade cedo até a velhice mediante a terapias ocupacionais, participação de eventos que abordam do tema e com empresas nos ajudando e tornando-se parceiras do nosso objetivo. Nós queremos capacitar a audiência do site com o conhecimento e as ferramentas para melhorar a qualidade de vida de qualquer pessoa com autismo.
                            </Paragraph>
                        </Section>
                        <Section>
                            <Title>Equipe</Title>
                            <Paragraph>
                                A equipe da empresa é composta por desenvolvedores, designers e programadores de jogos interessados em criar produtos que fazem a diferença. Cada pessoa da equipe tem uma visão única e um compromisso.
                            </Paragraph>
                            <List>
                                <li>Desenvolvedor</li>
                                <li>Designer</li>
                                <li>Programador de Jogos</li>
                                {/* Adicione mais membros da equipe conforme necessário */}
                            </List>
                        </Section>
                    </TextContainer>
                </ContentWrapper>
            </Container>
            <Footer />
        </>
    );
};

export default SaibaMais;
