import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
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
      <div className="section-container">
        <div className="hero-section">
          <div className="text-section">
            <p className="text-headline">🌱 Conecte-se com Especialistas em Energia Renovável</p>
            <h2 className="text-title">
              Encontre seu Especialista em Energia Sustentável
            </h2>
            <div className="hero-image-section">
            <img className="hero-image1" src={ImagemEnergiaRenovavel} alt="Energia Renovável" />
          </div>
            <p className="text-description">
              Conecte-se com profissionais em energia renovável e sustentabilidade. Obtenha conselhos especializados, descubra soluções verdes e colabore em projetos sustentáveis.
            </p>
            <button
              className="text-appointment-btn"
              type="button"
              onClick={handleBookAppointmentClick}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Agendar Consulta
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>100k+</p>
                <p>Projetos Apoiados</p>
              </div>

              <div className="text-stats-container">
                <p>200+</p>
                <p>Especialistas em Energia Renovável</p>
              </div>

              <div className="text-stats-container">
                <p>15+</p>
                <p>Anos de Experiência</p>
              </div>
            </div>
          </div>
          
        </div>
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
