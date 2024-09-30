import React, { useState, useEffect } from "react";
import Corpo from "./contents/Paginas/Corpo/Corpo";
import Footer from "./contents/Paginas/Footer/Footer";
import MenuTop from "./contents/Paginas/MenuTop/MenuTop";
import "./App.css"

function App() {
  const [language, setLanguage] = useState("pt"); // Idioma padrão

  // Carregar o idioma do localStorage quando o componente for montado
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "pt"; // Se não tiver nada no localStorage, use 'pt' como padrão
    setLanguage(savedLanguage);
  }, []);

  // Função para lidar com a mudança de idioma
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage); // Atualiza o estado com o idioma selecionado
    localStorage.setItem("language", selectedLanguage); // Salva o idioma no localStorage
  };

  return (
    <div className="container-fluid">
      <MenuTop onLanguageChange={handleLanguageChange} />
      <Corpo language={language} /> {/* Passa o idioma selecionado */}
      <Footer language={language} /> {/* Passa o idioma selecionado */}
    </div>
  );
}

export default App;
