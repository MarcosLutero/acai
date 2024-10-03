import React from "react";

import "./index.css";
import backgroundCima from "../../../images/bg-other.jpg";
import drone from "../../../images/drone.jpg";
function Sobre() {
  return (
    <div>
      <div className="image-container">
        <img src={backgroundCima} alt="Background Image" className="background-image" />
        <h1 className="titulo_sobre">Sobre A Xingu</h1>
      </div>
      <div className="container container-principal">
        <div className="text-center">
          <img src={drone} />
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
            <p>Clique nos anos para ver as informações</p>
          </div>
          <div className="linha _tempo_tempo" />
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="titulo_mvv">Missão, Visão e Valores</h1>
          </div>

          <div className="col-4">
          <i className="fab fa-email" />
            <h5 className="text-center">Missao</h5>
            <p>Fabricar produtos amazônicos, selecionando os melhores frutos, garantindo sua originalidade.</p>
          </div>
          <div className="col-4">
            <h5 className="text-center">Visão</h5>
            <p>Oferecer produtos de qualidade, sendo uma empresa competitiva e inovadora no setor alimentício.</p>
          </div>
          <div className="col-4">
            <h5 className="text-center">Valores</h5>
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
