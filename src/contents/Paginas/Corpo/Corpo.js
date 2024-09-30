import React, { useEffect, useState } from "react";
import imgInicial from "../../images/IMAGEM-XINGU-site-organis-açaí.jpg";
import certificacoes from "../../images/download.jpeg";
import "./index.css";

function Corpo({ language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Animação das imagens
  }, []);

  // Traduções locais no componente
  const translations = {
    pt: {
      header: "Açaí Xingu",
      description: "Nosso açaí é produzido seguindo um padrão de qualidade internacional e todas as boas práticas de fabricação. Não contém glúten, lactose, conservantes e gorduras.",
      description2: "Experimente nossos produtos, neles depositamos muita energia e inspiração com foco em alta qualidade e sabor.",
      produtosTitle: "Produtos",
      produtosDescription: "As polpas são elaboradas com frutas rigorosamente selecionadas dentre as melhores produzidas por fornecedores credenciados. Dessa forma garantimos o altíssimo padrão de qualidade durante todo o ano.",
      produtosDescription2: "Cremosidade + sabor + refrescância traduzem o nosso Sorbet. Com vários tipos de sabores, pronto para serem consumidos, em diversos tamanhos para matar qualquer vontade.",
      certificacoesTitle: "Certificações",
      noticiasTitle: "Notícias Recentes",
    },
    en: {
      header: "Xingu Açaí",
      description: "Our açaí is produced following an international quality standard and all good manufacturing practices. It is gluten, lactose, preservative, and fat-free.",
      description2: "Try our products, in which we put a lot of energy and inspiration, focusing on high quality and flavor.",
      produtosTitle: "Products",
      produtosDescription: "The pulps are made from rigorously selected fruits from the best suppliers. This ensures a high standard of quality throughout the year.",
      produtosDescription2: "Creaminess + flavor + refreshment describe our Sorbet. Available in several flavors, ready to be consumed in various sizes to satisfy any craving.",
      certificacoesTitle: "Certifications",
      noticiasTitle: "Recent News",
    },
    es: {
      header: "Açaí Xingu",
      description: "Nuestro açaí se produce siguiendo un estándar de calidad internacional y todas las buenas prácticas de fabricación. No contiene gluten, lactosa, conservantes ni grasas.",
      description2: "Prueba nuestros productos, en los que ponemos mucha energía e inspiración, enfocados en alta calidad y sabor.",
      produtosTitle: "Productos",
      produtosDescription: "Las pulpas se elaboran con frutas rigurosamente seleccionadas de los mejores proveedores. De esta manera garantizamos el más alto nivel de calidad durante todo el año.",
      produtosDescription2: "Cremosidad + sabor + frescura describen nuestro Sorbet. Disponible en varios sabores, listo para ser consumido en varios tamaños para satisfacer cualquier antojo.",
      certificacoesTitle: "Certificaciones",
      noticiasTitle: "Noticias Recientes",
    },
    it: {
      header: "Açaí Xingu",
      description: "Il nostro açaí è prodotto seguendo uno standard di qualità internazionale e tutte le buone pratiche di fabbricazione. Non contiene glutine, lattosio, conservanti o grassi.",
      description2: "Prova i nostri prodotti, nei quali mettiamo molta energia e ispirazione, con un focus su alta qualità e sapore.",
      produtosTitle: "Prodotti",
      produtosDescription: "Le polpe sono fatte da frutti rigorosamente selezionati dai migliori fornitori. In questo modo garantiamo un altissimo standard di qualità durante tutto l'anno.",
      produtosDescription2: "Cremosità + sapore + freschezza descrivono il nostro Sorbet. Disponibile in diversi gusti, pronto per essere consumato in vari formati per soddisfare qualsiasi desiderio.",
      certificacoesTitle: "Certificazioni",
      noticiasTitle: "Notizie Recenti",
    },
    zh: {
      header: "阿萨伊 Xingu",
      description: "我们的阿萨伊遵循国际质量标准和所有良好的制造规范生产。不含麸质、乳糖、防腐剂和脂肪。",
      description2: "尝试我们的产品，我们投入了大量的精力和灵感，专注于高质量和美味。",
      produtosTitle: "产品",
      produtosDescription: "果浆由精选的供应商提供的优质水果制成。这样，我们可以全年保证高标准的质量。",
      produtosDescription2: "我们的冰糕结合了奶油感+风味+清新感。提供多种口味和各种尺寸，满足您的任何需求。",
      certificacoesTitle: "认证",
      noticiasTitle: "最新新闻",
    },
  };

  // Obtém os textos com base no idioma selecionado
  const translatedTexts = translations[language];

  return (
    <div>
      <div className="image-container">
        <img src={imgInicial} className="img-fluid img_corpo" alt="Imagem com borda rasgada" />
      </div>

      <div>
        <div>
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

      <div>
        <div>
          <h2>{translatedTexts.produtosTitle}</h2>
        </div>
        <div>
          <p>{translatedTexts.produtosDescription}</p>
          <p>{translatedTexts.produtosDescription2}</p>
        </div>
        <div>
          <button className="botao-saiba-mais">Saiba Mais</button>
        </div>
      </div>

      <div>
        <div>
          <h2>{translatedTexts.certificacoesTitle}</h2>
        </div>
        <div>
          <img src={certificacoes} alt="Certificações" className={`certificacoes-img ${isVisible ? 'visible' : ''}`} />
        </div>
      </div>

      <div>
        <div>
          <h2>{translatedTexts.noticiasTitle}</h2>
        </div>
        <div>
          <img src={certificacoes} alt="Notícias" className={`certificacoes-img ${isVisible ? 'visible' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export default Corpo;
