import React, { useEffect, useState, useRef } from "react";
import imgInicial from "../../images/IMAGEM-XINGU-site-organis-açaí.jpg";
import certificacoes from "../../images/download.jpeg";
import "./index.css";
import acaiXingu from "../../images/acai.jpg";
import produtos from "../../images/produtos.png";

function Corpo({ language }) {
  const acaiXinguRef = useRef(null);
  const produtosRef = useRef(null);
  const certificacoesRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // 10% visível para ativar a transição
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observar cada imagem
    if (acaiXinguRef.current) observer.observe(acaiXinguRef.current);
    if (produtosRef.current) observer.observe(produtosRef.current);
    if (certificacoesRef.current) observer.observe(certificacoesRef.current);

    // Cleanup
    return () => {
      if (acaiXinguRef.current) observer.unobserve(acaiXinguRef.current);
      if (produtosRef.current) observer.unobserve(produtosRef.current);
      if (certificacoesRef.current) observer.unobserve(certificacoesRef.current);
    };
  }, []);

  // Traduções locais no componente
  const translations = {
    pt: {
      header: "Açaí Xingu",
      description:
        "Nosso açaí é produzido seguindo um padrão de qualidade internacional e todas as boas práticas de fabricação. Não contém glúten, lactose, conservantes e gorduras.",
      description2:
        "Experimente nossos produtos, neles depositamos muita energia e inspiração com foco em alta qualidade e sabor.",
      produtosTitle: "Produtos",
      produtosDescription:
        "As polpas são elaboradas com frutas rigorosamente selecionadas dentre as melhores produzidas por fornecedores credenciados. Dessa forma garantimos o altíssimo padrão de qualidade durante todo o ano.",
      produtosDescription2:
        "Cremosidade + sabor + refrescância traduzem o nosso Sorbet. Com vários tipos de sabores, pronto para serem consumidos, em diversos tamanhos para matar qualquer vontade.",
      certificacoesTitle: "Certificações",
      noticiasTitle: "Notícias Recentes",
    },
    en: {
      header: "Xingu Açaí",
      description:
        "Our açaí is produced following an international quality standard and all good manufacturing practices. It is gluten, lactose, preservative, and fat-free.",
      description2:
        "Try our products, in which we put a lot of energy and inspiration, focusing on high quality and flavor.",
      produtosTitle: "Products",
      produtosDescription:
        "The pulps are made from rigorously selected fruits from the best suppliers. This ensures a high standard of quality throughout the year.",
      produtosDescription2:
        "Creaminess + flavor + refreshment describe our Sorbet. Available in several flavors, ready to be consumed in various sizes to satisfy any craving.",
      certificacoesTitle: "Certifications",
      noticiasTitle: "Recent News",
    },
    // ... Outras traduções
  };

  const translatedTexts = translations[language];

  return (
    <div>
      <div className="image-container">
        <img
          src={imgInicial}
          className="img-fluid img_corpo"
          alt="Imagem com borda rasgada"
        />
      </div>
      <div className="container">


        <div>
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-md-5">
              <div className="text-center">
                <h2>{translatedTexts.header}</h2>
              </div>
              <div>
                <p>{translatedTexts.description}</p>
                <p>{translatedTexts.description2}</p>
              </div>
              <div>
                <button className="botao-saiba-mais">Saiba Mais</button>
              </div>
            </div>
            <div className="col-md-7">
              <img
                src={acaiXingu}
                alt="acaiXingu"
                className="acaiXingu-img"
                ref={acaiXinguRef}
              />
            </div>
          </div>
        </div>
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-md-5">
            <div>
              <div className="text-center">
                <h2>{translatedTexts.produtosTitle}</h2>
              </div>
              <div className="">
                <p>{translatedTexts.produtosDescription}</p>
                <p>{translatedTexts.produtosDescription2}</p>
              </div>
              <div>
                <button className="botao-saiba-mais">Saiba Mais</button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img
              src={produtos}
              alt="produtos"
              className="produtos-img"
              ref={produtosRef}
            />
          </div>
        </div>

        <div>
          <div className="text-center">
            <h2>{translatedTexts.certificacoesTitle}</h2>
          </div>
          <div>
            <img
              src={certificacoes}
              alt="Certificações"
              className="certificacoes-img"
              ref={certificacoesRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corpo;
