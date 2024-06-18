import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"; // Importando componentes do Bootstrap
import StyledHero from "./style.js";
import ImagemEnergiaRenovavel from "../../assets/especialista.jpg";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/Agendamento");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <StyledHero>
      <Container fluid>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div className="text-section">
              <p className="text-headline">
                🌱 Conecte-se com Especialistas em Energia Renovável
              </p>
              <h2 className="text-title">
                Encontre seu Especialista em Energia Sustentável
              </h2>
              <p className="text-description">
                Conecte-se com profissionais em energia renovável e
                sustentabilidade. Obtenha conselhos especializados, descubra
                soluções verdes e colabore em projetos sustentáveis.
              </p>
              <Button
                className="text-appointment-btn"
                variant="primary"
                onClick={handleBookAppointmentClick}
              >
                <FontAwesomeIcon icon={faCalendarCheck} /> Agendar Consulta
              </Button>
              <div className="text-stats mt-3">
                <Row>
                  <Col xs={4}>
                    <p className="mb-0">100k+</p>
                    <p>Projetos Apoiados</p>
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">200+</p>
                    <p>Especialistas em Energia Renovável</p>
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">15+</p>
                    <p>Anos de Experiência</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image-section">
              <img
                className="hero-image1 img-fluid"
                src={ImagemEnergiaRenovavel}
                alt="Energia Renovável"
              />
            </div>
          </Col>
        </Row>
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </Container>
    </StyledHero>
  );
}

export default Hero;
