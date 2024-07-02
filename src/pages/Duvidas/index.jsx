import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FAQPage = () => {
  return (
    <PageWrapper>
      <Header fullWidth={true} />
      <Container>
        <Title>Perguntas Frequentes sobre Autismo na Educação</Title>
        <Question>
          <h3>O que é autismo?</h3>
          <p>O autismo é um transtorno neurológico que afeta o desenvolvimento do cérebro, influenciando como uma pessoa percebe e interage com o mundo ao seu redor. É caracterizado por diferenças na comunicação, interação social, comportamentos repetitivos e sensibilidade sensorial. Por exemplo, algumas pessoas autistas podem preferir rotinas estritas e serem sensíveis a certos sons ou texturas, enquanto outras podem ter dificuldades em interpretar expressões faciais ou iniciar conversas.</p>
        </Question>
        <Question>
          <h3>Quais são os sintomas do autismo?</h3>
          <p>Os sinais de autismo variam amplamente, mas geralmente incluem dificuldades na comunicação verbal (como atraso no desenvolvimento da linguagem), dificuldades em interações sociais (como dificuldade em fazer amigos ou entender emoções) e comportamentos repetitivos (como movimentos corporais repetitivos ou fixação em interesses específicos). Sensibilidade sensorial, como hipersensibilidade ao barulho ou luz, também é comum.</p>
        </Question>
        <Question>
          <h3>Como o autismo é diagnosticado?</h3>
          <p>O diagnóstico de autismo envolve uma avaliação multidisciplinar, frequentemente conduzida por psicólogos, pediatras, neurologistas e fonoaudiólogos. Eles usam critérios do DSM-5 para identificar padrões de comportamento que indicam autismo. Por exemplo, observam se a criança apresenta dificuldades significativas em áreas como comunicação, interação social e comportamentos repetitivos.</p>
        </Question>
        <Question>
          <h3>Como o ambiente escolar pode ser adaptado para alunos autistas?</h3>
          <p>Adaptar o ambiente escolar para alunos autistas envolve considerar suas necessidades sensoriais e de comunicação. Por exemplo, criar áreas de descanso tranquilo onde os alunos possam se retirar para reduzir o estresse sensorial. O uso de rotinas visuais claras, como calendários e horários, ajuda os alunos a entenderem a sequência de atividades do dia. Incluir estratégias de comunicação alternativa, como tablets com aplicativos de comunicação, também facilita a interação.</p>
        </Question>
        <Question>
          <h3>Quais são as melhores práticas para a inclusão de alunos autistas na sala de aula?</h3>
          <p>Inclusão eficaz significa adaptar o ensino para atender às necessidades individuais dos alunos autistas. Por exemplo, oferecer instruções claras e diretas, usando apoios visuais para reforçar conceitos, e permitir tempo adicional para processamento de informações são práticas úteis. Incentivar interações sociais estruturadas, como através de grupos de trabalho pequenos, promove a participação ativa dos alunos autistas na comunidade escolar.</p>
        </Question>
        <Question>
          <h3>Quais recursos educacionais estão disponíveis para apoiar alunos autistas?</h3>
          <p>Recursos educacionais incluem suporte de profissionais treinados em autismo, como psicólogos escolares ou terapeutas ocupacionais, que podem fornecer orientação específica e treinamento para professores. Tecnologias assistivas, como softwares de aprendizagem adaptativa ou aplicativos de comunicação, ajudam alunos autistas a acessarem o currículo de maneira mais eficaz. Programas de habilidades sociais estruturados também são úteis para desenvolver competências sociais.</p>
        </Question>
        <Question>
          <h3>Como posso ajudar meu filho autista a lidar com mudanças na rotina diária?</h3>
          <p>Mudanças na rotina podem ser desafiadoras para crianças autistas, que muitas vezes preferem previsibilidade. Para ajudar, você pode criar um cronograma visual ou calendário que descreva a sequência de atividades diárias. Por exemplo, use imagens ou ícones para representar cada atividade, como acordar, café da manhã, escola, etc. Antes de uma mudança planejada, como uma visita ao médico, discuta com antecedência o que vai acontecer, usando o cronograma visual como suporte. Isso ajuda a reduzir a ansiedade e prepara seu filho para a transição.</p>
        </Question>
        <Question>
          <h3>Quais são algumas estratégias para promover interações sociais positivas entre crianças autistas e seus colegas?</h3>
          <p>Promover interações sociais positivas pode começar com a educação dos colegas sobre as necessidades e preferências do seu filho autista. Por exemplo, converse com o professor sobre atividades estruturadas que incentivem a cooperação e a comunicação entre todos os alunos. Jogos de turnos, onde cada criança tem a oportunidade de falar e ouvir, são úteis. Além disso, use histórias sociais ou jogos de papéis para ensinar habilidades sociais específicas, como iniciar uma conversa ou compartilhar brinquedos.</p>
        </Question>
        <Question>
          <h3>Sou autista. Por que me sinto sobrecarregado em ambientes barulhentos ou com muitas pessoas?</h3>
          <p>A sensibilidade sensorial é comum em pessoas autistas, o que significa que o cérebro pode processar estímulos sensoriais, como sons, luzes ou texturas, de maneira intensa. Isso pode levar a uma sobrecarga sensorial, onde o cérebro se sente sobrecarregado e incapaz de filtrar ou processar adequadamente esses estímulos.</p>
        </Question>
        <Question>
          <h3>Sou autista. Por que tenho dificuldades em entender as emoções das pessoas?</h3>
          <p>Para melhorar a compreensão das emoções dos outros, pratique reconhecer expressões faciais e linguagem corporal em situações cotidianas. Considere usar recursos visuais, como cartões de emoções ou diagramas, para aprender a associar expressões faciais com estados emocionais. Participe de grupos de habilidades sociais ou terapia individualizada, onde você pode praticar interpretar sinais sociais sutis e receber feedback construtivo..</p>
        </Question>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2.0rem;
  text-align: center;
  margin-bottom: 30px;
`;

const Question = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6;
  }
`;

export default FAQPage;
