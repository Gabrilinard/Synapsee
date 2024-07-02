import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"; 
import StyledHero from "./style.js";
import ImagemAutismo from "../../assets/meninaAutista.jpg";
9
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
                🧩 Explore e Participe de Eventos Inclusivos sobre Autismo
              </p>
              <h2 className="text-title">
                Descubra Eventos para a Comunidade Autista
              </h2>
              <p className="text-description">
                Encontre eventos voltados para inclusão de pessoas autistas.
                Explore atividades divertidas e educativas, e participe de
                iniciativas que promovem a conscientização e o apoio à causa
                autista.
              </p>
              <Button
                className="text-appointment-btn"
                variant="primary"
                onClick={handleBookAppointmentClick}
              >
                <FontAwesomeIcon icon={faCalendarCheck} /> Procurar Eventos
              </Button>
              <div className="text-stats mt-3">
                <Row>
                  <Col xs={4}>
                    <p className="mb-0">100k+</p>
                    <p>Eventos Disponíveis</p>
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">200+</p>
                    <p>Locais Diferentes</p>
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">15+</p>
                    <p>Anos de Apoio à Comunidade</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image-section">
              <img
                className="hero-image1 img-fluid"
                src={ImagemAutismo}
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
