import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Corpo from "./contents/Paginas/Corpo/Corpo";
import Footer from "./contents/Paginas/Footer/Footer";
import MenuTop from "./contents/Paginas/MenuTop/MenuTop";
import Certificacoes from "./contents/Paginas/PaginasNav/Certificacoes/Certificacoes";
import Produtos from "./contents/Paginas/PaginasNav/Produtos/Produtos";
import Sobre from "./contents/Paginas/PaginasNav/Sobre/Sobre";
import Noticias from "./contents/Paginas/PaginasNav/Noticias/Noticias";
import Contato from "./contents/Paginas/PaginasNav/Contato/Contato";
import Sustentabilidade from "./contents/Paginas/PaginasNav/Sustentabilidade/Sustentabilidade";
import Receitas from "./contents/Paginas/PaginasNav/Receitas/Receitas";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "pt";
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <Router>
      <div className="container-fluid">
        <MenuTop onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={<Corpo language={language} />} />
          <Route path="/certificacoes" element={<Certificacoes language={language} />} />
          <Route path="/produtos" element={<Produtos language={language} />} />
          <Route path="/sobre" element={<Sobre language={language} />} />
          <Route path="/sustentabilidade" element={<Sustentabilidade language={language} />} />
          <Route path="/receitas" element={<Receitas language={language} />} />
          <Route path="/noticias" element={<Noticias language={language} />} />
          <Route path="/contato" element={<Contato language={language} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
