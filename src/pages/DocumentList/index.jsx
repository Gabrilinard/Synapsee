// src/components/DocumentList.js
import React from 'react';
import useStyles from './style'; 
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';

const documents = [
  {
    id: 1,
    title: 'Gestão de Resíduos',
    description: 'Estratégia Gestão de Resíduos.',
    url: 'https://www.industriaeambiente.pt/userfiles/files/blog/Documento_Estrategico_Gestao_Residuos_2030.pdf',
  },
  {
    id: 2,
    title: 'Relatório Rio',
    description: 'Relatório de Sustentabilidade da Organização da Conferência das Nações Unidas sobre Desenvolvimento Sustentável.',
    url: 'http://www.rio20.gov.br/documentos/relatorio-rio-20/1.-relatorio-rio-20/at_download/relatorio_rio20.pdf',
  },
  {
    id: 3,
    title: 'Relatório Anual Águas de Teresina',
    description: 'Relatório Anual Águas de Teresina - Qualidade da Água.',
    url: 'https://www.aguasdeteresina.com.br/wp-content/uploads/2023/05/Relatorio-Anual-de-Qualidade-da-Agua-2022.pdf',
  },
  {
    id: 4,
    title: 'Artigo MMA - GovBr',
    description: 'Estruturas e arquivos do Artigo MMA - GovBr.',
    url: 'https://antigo.mma.gov.br/estruturas/agenda21/_arquivos/edital0305br163.pdf',
  },
];

const DocumentList = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
    <div className={classes.container}>
      <h2 className={classes.header}>Documentos Úteis e Recursos de Sustentabilidade</h2>
      <ul className={classes.list}>
        {documents.map((doc) => (
          <li key={doc.id} className={classes.item}>
            <h3 className={classes.title}>{doc.title}</h3>
            <p className={classes.description}>{doc.description}</p>
            <a href={doc.url} download className={classes.downloadLink} target="_blank" rel="noopener noreferrer">
              <button className={classes.button}>Download</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <Footer />

    </>
  );
};

export default DocumentList;
