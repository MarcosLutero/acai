import React, { useEffect, useRef } from "react";
import imgInicial from "../../images/IMAGEM-XINGU-site-organis-açaí.jpg";
import "./index.css";
import acaiXingu from "../../images/acai.jpg";
import produtos from "../../images/produtos.png";
import logobgk from "../../images/logo-bdk.png";
import logobiosuisse from "../../images/logo-biosuisse.png";
import logobrbio from "../../images/logo-br-bio-154.png";
import logocanadaorganic from "../../images/logo-canada-organic.png";
import logoframbas from "../../images/logo-fambras.png";
import logofairforlife from "../../images/logo-fair-for-life.png";
import logojas from "../../images/logo-jas.png";
import logonongmo from "../../images/logo-non-gmo.png";
import logoorganico from "../../images/logo-organico.png";
import logousda from "../../images/logo-usda.png";

function Corpo({ language }) {
  // Crie referências separadas
  const acaiXinguRef = useRef(null);
  const produtosRef = useRef(null);
  const certificacoesRef = useRef(null);
  const tituloRef1 = useRef(null);
  const descricaoRef1 = useRef(null);
  const tituloRef2 = useRef(null);
  const descricaoRef2 = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1 // 10% visível para ativar a transição
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
  
    // Criando variáveis locais para cada ref
    const acaiXinguElement = acaiXinguRef.current;
    const produtosElement = produtosRef.current;
    const certificacoesElement = certificacoesRef.current;
    const tituloElement1 = tituloRef1.current;
    const descricaoElement1 = descricaoRef1.current;
    const tituloElement2 = tituloRef2.current;
    const descricaoElement2 = descricaoRef2.current;
  
    // Observar os elementos
    if (acaiXinguElement) observer.observe(acaiXinguElement);
    if (produtosElement) observer.observe(produtosElement);
    if (certificacoesElement) observer.observe(certificacoesElement);
    if (tituloElement1) observer.observe(tituloElement1);
    if (descricaoElement1) observer.observe(descricaoElement1);
    if (tituloElement2) observer.observe(tituloElement2);
    if (descricaoElement2) observer.observe(descricaoElement2);
  
    // Cleanup
    return () => {
      if (acaiXinguElement) observer.unobserve(acaiXinguElement);
      if (produtosElement) observer.unobserve(produtosElement);
      if (certificacoesElement) observer.unobserve(certificacoesElement);
      if (tituloElement1) observer.unobserve(tituloElement1);
      if (descricaoElement1) observer.unobserve(descricaoElement1);
      if (tituloElement2) observer.unobserve(tituloElement2);
      if (descricaoElement2) observer.unobserve(descricaoElement2);
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
      noticiasTitle: "Notícias Recentes"
    },
    en: {
      header: "Xingu Açaí",
      description:
        "Our açaí is produced following an international quality standard and all good manufacturing practices. It is gluten, lactose, preservative, and fat-free.",
      description2: "Try our products, in which we put a lot of energy and inspiration, focusing on high quality and flavor.",
      produtosTitle: "Products",
      produtosDescription:
        "The pulps are made from rigorously selected fruits from the best suppliers. This ensures a high standard of quality throughout the year.",
      produtosDescription2:
        "Creaminess + flavor + refreshment describe our Sorbet. Available in several flavors, ready to be consumed in various sizes to satisfy any craving.",
      certificacoesTitle: "Certifications",
      noticiasTitle: "Recent News"
    }
    // ... Outras traduções
  };

  const translatedTexts = translations[language] || translations["pt"];

  return (
    <div>
      <div className="image-container">
        <img src={imgInicial} className="img-fluid img_corpo" alt="Imagem com borda rasgada" />
      </div>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-md-5">
            <div className="titulo" ref={tituloRef1}>
              <h2>{translatedTexts.header}</h2>
            </div>
            <div className="descricao" ref={descricaoRef1}>
              <p>{translatedTexts.description}</p>
              <p>{translatedTexts.description2}</p>
            </div>
            <div>
            <div className="botao_verde">
                <span className="btn_txt">Saiba Mais</span>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img src={acaiXingu} alt="acaiXingu" className="acaiXingu-img" ref={acaiXinguRef} />
          </div>
        </div>

        <div className="row d-flex flex-wrap align-items-center">
          <div className="titulo-produto text-center" ref={tituloRef2}>
            <h2>{translatedTexts.produtosTitle}</h2>
          </div>
          <div className="col-md-7">
            <img src={produtos} alt="produtos" className="produtos-img" ref={produtosRef} />
          </div>
          <div className="col-md-5">
            <div>
              <div className="descricao" ref={descricaoRef2}>
                <p>{translatedTexts.produtosDescription}</p>
                <p>{translatedTexts.produtosDescription2}</p>
              </div>
              <div className="mt-2">
                <div className="botao_verde">
                  <span className="btn_txt">Saiba Mais</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className=" row text-center">
            <h2>{translatedTexts.certificacoesTitle}</h2>
          </div>
          <div className="row p-4 m-1">
            <div className="col">
              <img src={logobgk} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logobiosuisse} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logocanadaorganic} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logofairforlife} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logoframbas} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
          </div>
          <div className="row p-4 m-1">
            <div className="col">
              <img src={logobrbio} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logojas} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logonongmo} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logoorganico} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
            <div className="col">
              <img src={logousda} alt="Certificações" className="certificacoes-img" ref={certificacoesRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corpo;
