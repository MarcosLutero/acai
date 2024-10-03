import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./index.css";

function MenuTop({ onLanguageChange }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (language) => {
    onLanguageChange(language);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg secondary_nav">
        <div className="container">
          <div className="row w-100">
            <div className="col d-flex justify-content-evenly align-items-center">
              <div className="dropdown">
                <button className="dropdown-button" onClick={toggleDropdown}>
                  Português
                  <i className="fa fa-angle-down dropdown-arrow" />
                </button>
                <div className="dropdown-content" id="dropdownContent">
                  <a href="#" onClick={() => handleLanguageChange("en")}>
                    Inglês
                  </a>
                  <a href="#" onClick={() => handleLanguageChange("es")}>
                    Espanhol
                  </a>
                  <a href="#" onClick={() => handleLanguageChange("it")}>
                    Italiano
                  </a>
                  <a href="#" onClick={() => handleLanguageChange("zh")}>
                    Mandarim
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="fa fa-phone phone-icon"></i>
                <p className="phone m-0">(85) 99630-8944</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="fa fa-envelope email-icon"></i>
                <p className="email m-0">Contato@xingufruit.com.br</p>
              </div>

              <div className="d-flex justify-content-end align-items-center social-icons">
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`navbar navbar-expand-lg main_nav ${isSticky ? "sticky-nav" : ""}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="img_logo" src={logo} alt="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/sobre">A Xingu Fruit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/produtos">Produtos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/certificacoes">Certificações</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/sustentabilidade">Sustentabilidade</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/receitas">Receitas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/noticias">Noticias</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuTop;
