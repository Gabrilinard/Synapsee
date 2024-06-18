import styled from "styled-components";

const StyledHero = styled.div`
  background-color: #f4f4f4;
  padding: 100px 0;
  text-align: center;
  width: '100%';
  display: flex;
  flex-direction: line;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Altura mínima igual à viewport */
  box-sizing: border-box;

  .text-headline {
    font-size: 24px;
    color: #333; /* Alterado para um tom mais escuro para melhor legibilidade */
    margin-bottom: 12px;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
  }

  .text-title {
    font-size: 36px;
    margin: 20px 0;
    color: #000; /* Mantido preto para contraste */
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  .text-description {
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto 30px;
    color: #333; /* Alterado para um tom mais escuro para melhor legibilidade */
    font-family: 'Rubik', sans-serif;
    line-height: 1.6;
  }

  .text-appointment-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    font-family: 'Rubik', sans-serif;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }

  .text-stats {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .text-stats-container {
      flex: 1;
      padding: 0 20px;
      text-align: center;

      p:first-child {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 8px;
        font-family: 'Rubik', sans-serif;
      }

      p:last-child {
        font-size: 16px;
        color: #666;
        font-family: 'Rubik', sans-serif;
      }
    }
  }

  .hero-image-section {
    margin-top: 40px;

    .hero-image {
      width: 100%;
      max-width: 8px;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
  }

  .scroll-up {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4caf50;
    color: white;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    display: none;

    &.show-scroll {
      display: block;
    }
  }

  @media screen and (max-width: 900px) {
    .hero-image-section {
      display: none;
    }

    .text-section {
      width: 100%;
      padding: 0;
    }

    .text-title, .text-description {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    .text-headline {
      font-size: 20px;
    }

    .text-title {
      font-size: 28px;
    }

    .text-description {
      font-size: 16px;
    }

    .text-appointment-btn {
      font-size: 16px;
      padding: 10px 18px;
    }

    .text-stats {
      gap: 18px;
    }

    .text-stats-container > p {
      font-size: 16px;
    }

    .text-stats-container p:first-child {
      font-size: 22px;
    }

    .scroll-up {
      bottom: 32px;
      right: 32px;
    }
  }
`;

export default StyledHero;
