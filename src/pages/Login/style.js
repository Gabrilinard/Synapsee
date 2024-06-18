import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #2D464F;

  .h-custom-2 {
    @media (min-width: 1025px) {
      height: 100%;
    }
  }

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

  .spinning {
    transform: rotate(360deg);
  }

  .login-image {
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  .hover-image {
    position: absolute;
    width: 50px;
    height: 50px;
    right: 10px;
    top: 10px;
  }

  .hovered {
    background-color: #333;
    color: #fff;
  }

  
`;