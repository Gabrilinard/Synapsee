import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import casades from "../../assets/casades.jpg"
import alfabeto from "../../assets/alfabetodes.jpg"
import dino from "../../assets/dinodes.jpg"
import divertidaIdes from "../../assets/divertidaIdes.jpg"
import divertida from "../../assets/divertidades.jpg"
import dog from "../../assets/dogdes.jpg"
import maca from "../../assets/macades.jpg"
import princesa from "../../assets/princesades.jpg"
import tartaruga from "../../assets/tartarugades.jpg"
import {
  Container,
  HeaderTitle,
  DocumentList,
  DocumentItem,
  DocumentLink,
  DocumentDescription,
  DrawingList,
  DrawingItem,
  DrawingImage,
  DrawingTitle,
  DrawingDownload
} from './style';

const documentos = [
  {
    id: 1,
    title: 'Messi Autista',
    description: 'Uma análise sobre a vida e os desafios de Messi, abordando aspectos do autismo e superação.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:7155c884-c5e3-4d10-9160-9fe76195c22a'
  },
  {
    id: 2,
    title: 'Alimentação do Autista',
    description: 'Dicas e orientações sobre alimentação adequada para pessoas com autismo.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:e9692491-1828-4f41-a249-18168d39942e'
  },
  {
    id: 3,
    title: 'A Fala do Autista',
    description: 'Estratégias e recursos para apoiar o desenvolvimento da fala em pessoas com autismo.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:f91fa2ca-17c2-4749-8434-62bbe751be9d'
  },
  {
    id: 4,
    title: 'Saiba o que fazer ao identificar sinais de autismo em outra pessoa',
    description: 'Orientações práticas para identificar e lidar com sinais de autismo em outras pessoas.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:072f8ec3-b67f-4a17-87a6-02e073362e14'
  },
  {
    id: 5,
    title: 'Terapia Ocupacional para crianças autista: como o tratamento pode ajudar?',
    description: 'Como a terapia ocupacional pode beneficiar crianças com autismo, melhorando suas habilidades diárias.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:f22c1d74-7295-4e60-a767-4813d82ab2f8'
  },
  {
    id: 6,
    title: 'Saúde Mental dos Cuidadores',
    description: 'Importância e estratégias para manter a saúde mental dos cuidadores de pessoas com autismo.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:b0d08fae-9f4c-45b8-b7d2-83ceea1c4b05'
  },
  {
    id: 7,
    title: 'Terapia ABA para autismo: como o tratamento pode ajudar?',
    description: 'Informações sobre a Terapia ABA e seus benefícios no tratamento do autismo.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:043e147b-befb-4148-9d96-3b4c011318af'
  },
  {
    id: 8,
    title: 'Revista: Autismo Respeito para todo o Espectro',
    description: 'Edição especial da revista abordando o respeito e inclusão de pessoas no espectro autista.',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:525f1926-e512-43e0-8e2c-c24bbd82bb23'
  }
];

const desenhos = [
  {
    id: 1,
    title: 'Desenho Casa',
    imageUrl: casades, // Substitua pelo caminho da sua imagem
    downloadLink: casades // Substitua pelo caminho do seu download
  },
  {
    id: 2,
    title: 'Desenho Alfabeto',
    imageUrl: alfabeto,
    downloadLink: alfabeto
  },
  {
    id: 3,
    title: 'Desenho Dinossauro',
    imageUrl: dino,
    downloadLink: dino
  },
  {
    id: 4,
    title: 'Desenho Divertidamente I',
    imageUrl: divertidaIdes,
    downloadLink: divertidaIdes
  },
  {
    id: 5,
    title: 'Desenho Divertidamente II',
    imageUrl: divertida,
    downloadLink: divertida
  },
  {
    id: 6,
    title: 'Desenho Cachorro',
    imageUrl: dog,
    downloadLink: dog
  },
  {
    id: 7,
    title: 'Desenho Maças',
    imageUrl: maca,
    downloadLink: maca
  },
  {
    id: 8,
    title: 'Desenho Princesa',
    imageUrl: princesa,
    downloadLink: princesa
  },
  {
    id: 9,
    title: 'Desenho Tartaruga',
    imageUrl: tartaruga,
    downloadLink: tartaruga
  }
];

const DocumentosAutismo = () => {
  return (
    <>
      <Header />
      <Container>
        <HeaderTitle>Documentos sobre Autismo</HeaderTitle>
        <DocumentList>
          {documentos.map(doc => (
            <DocumentItem key={doc.id}>
              <DocumentLink href={doc.link} target="_blank" rel="noopener noreferrer">
                {doc.title}
              </DocumentLink>
              <DocumentDescription>{doc.description}</DocumentDescription>
            </DocumentItem>
          ))}
        </DocumentList>
        <HeaderTitle>Desenhos</HeaderTitle>
        <DrawingList>
          {desenhos.map(drawing => (
            <DrawingItem key={drawing.id}>
              <DrawingImage src={drawing.imageUrl} alt={drawing.title} />
              <DrawingTitle>{drawing.title}</DrawingTitle>
              <DrawingDownload href={drawing.downloadLink} download>
                Baixar
              </DrawingDownload>
            </DrawingItem>
          ))}
        </DrawingList>
      </Container>
      <Footer />
    </>
  );
};

export default DocumentosAutismo;