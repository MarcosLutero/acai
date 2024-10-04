import React, { useState } from "react";

import "./index.css";
import backgroundCima from "../../../images/bg-other.jpg";
import drone from "../../../images/drone.jpg";
import { faEye, faPersonArrowUpFromLine, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Sobre() {

  const events = [
    { year: '2017', description: 'Fundação em Castanhal/PA.' },
    { year: '2017', description: 'Primeiro produto envasado na nossa marca.' },
    { year: '2017', description: 'Primeira produção na Xingu Fruit.' },
    { year: '2017', description: 'Primeira venda Rio de Janeiro.' },
    { year: '2017', description: 'Primeira exportação EUA.' },
    { year: '2017', description: 'Conquista da Certificação Orgânica Brasil, EUA, Europa.' },
    { year: '2018', description: 'Início Exportação Austrália.' },
    { year: '2018', description: 'Início Exportação Europa.' },
    { year: '2018', description: 'Emirados e Singapura.' },
    { year: '2018', description: 'Primeira feira internacional Biofach.' },
    { year: '2018', description: 'Exportação de polpas de outras frutas.' },
    { year: '2018', description: 'FSSC 22000, Halal, Kosher, Non Gmo.' },
    { year: '2018', description: 'Início das Produções em Manacapuru/AM.' },
    { year: '2018', description: 'Iníco das Produções em Macapá/AP.' },
    { year: '2019', description: 'Conquista de Certificação Orgânica Biosuisse e Japão.' },
    { year: '2019', description: 'Premiada entre as quinze melhores empresas pela pesquisa "Prazer em Trabalhar".' },
    { year: '2019', description: 'Ampliação da Fábrica Castanhal/PA.' },
    { year: '2019', description: 'Início Exportação Japão.' },
    { year: '2020', description: 'Pesquisa e desenvolvimento na linha de produção em Sorbet de Açaí.' },
    { year: '2020', description: 'Equador' },
    { year: '2021', description: 'Pesquisa e desenvolvimento na linha de produção de IQF.' },
    { year: '2021', description: 'Conquista das certificações Fair for Life, BRC e FSSC 22000- Quality.' }
  ]

  const groupEventsByYear = (events) => {
    return events.reduce((acc, event) => {
      if (!acc[event.year]) {
        acc[event.year] = [];
      }
      acc[event.year].push(event.description);
      return acc;
    }, {});
  };

  const [selectedYear, setSelectedYear] = useState(null);
  const eventsByYear = groupEventsByYear(events);
  const [isTransitioning, setIsTransitioning] = useState(false); // Novo estado para controlar a transição

  const handleButtonClick = (year) => {
    if (selectedYear !== year) {
      setIsTransitioning(true); // Ativa a transição
      setTimeout(() => {
        setSelectedYear(year);
        setIsTransitioning(false); // Desativa após a transição
      }, 500); // Meio segundo para suavizar a troca
    }
  };


  return (
    <div>
      <div className="image-container">
        <img src={backgroundCima} alt="background" className="background-image" />
        <h1 className="titulo_sobre">Sobre A Xingu</h1>
      </div>
      <div className="container container-principal">
        <div className="text-center">
          <img src={drone} alt="drone" />
        </div>
        <div>
          <p className="text">
            Inspirada nas águas claras do Rio Xingu, a Xingu Fruit traz em sua essência, a transparência nas relações com todos
            os steakholders. A ideia de montar a Xingu, surgiu a partir da vontade de implantar inovações e motodologias de
            trabalho nas empresas de polpas de frutas, em especial, as polpas de açaí.
          </p>
          <p className="text">
            O Projeto Xingu Fruit não se limita em apenas levar os produtos a novos mercados, busca fazer isso através de uma
            cultura inovadora, baseada emrelacionamento, comunhão e socialização, preservandoo sabor e a pureza de cada fruta,
            através de um alto padrão de qualidade e principalmente, respeitando todas as cadeias do processo produtivo. Vamos
            em busca de sonhar, ousar e fazer, indo na velocidade do Rio Xingu.
          </p>
        </div>
        <div className="linha_tempo">
          <div className="linha_tempo_titulo">
            <h1 className="titulo_linha_tempo text-center">Linha do tempo</h1>
            <p className="text-center">Clique nos anos para ver as informações</p>
            <hr />
            <div className="timeline-buttons">
              {Object.keys(eventsByYear).map((year) => (
                <button
                  key={year}
                  onClick={() => handleButtonClick(year)}
                  className="year-button"
                >
                  {year}
                </button>
              ))}
            </div>
            {selectedYear && (
              <div className={`event-info ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                {eventsByYear[selectedYear].map((description, index) => (
                  <div key={index} className="event-description">
                    <strong>{selectedYear}</strong>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="titulo_mvv">Missão, Visão e Valores</h1>
          </div>

          <div className="col-4 text-center">
            <FontAwesomeIcon icon={faPersonArrowUpFromLine} className="fa-icon" />
            <h5 className="">Missao</h5>
            <p>Fabricar produtos amazônicos, selecionando os melhores frutos, garantindo sua originalidade.</p>
          </div>
          <div className="col-4 text-center">
            <FontAwesomeIcon icon={faEye} className="fa-icon" />
            <h5 className="">Visão</h5>
            <p>Oferecer produtos de qualidade, sendo uma empresa competitiva e inovadora no setor alimentício.</p>
          </div>
          <div className="col-4 text-center">
            <FontAwesomeIcon icon={faStar} className="fa-icon" />
            <h5 className="">Valores</h5>
            <p>
              Paixão, Liderança interativa, Proatividade, Qualidade, Ética & respeito, Transparência, Melhoria continua,
              Meritocracia, Foco nas pessoas e Responsabilidade social.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
