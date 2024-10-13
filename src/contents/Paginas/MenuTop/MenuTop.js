import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./index.css";
import { Button } from "react-bootstrap";

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

  const handleLanguageChange = language => {
    onLanguageChange(language);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  };

  const handleSocialClick = platform => {
    switch (platform) {
      case "linkedin":
        window.open("https://www.linkedin.com", "_blank");
        break;
      case "facebook":
        window.open("https://www.facebook.com", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com", "_blank");
        break;
      default:
        break;
    }
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
                  <button onClick={() => handleLanguageChange("en")}>Inglês</button>
                  <button onClick={() => handleLanguageChange("es")}>Espanhol</button>
                  <button onClick={() => handleLanguageChange("it")}>Italiano</button>
                  <button onClick={() => handleLanguageChange("zh")}>Mandarim</button>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="fa fa-phone phone-icon" />
                <p className="phone m-0">(85) 99630-8944</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="fa fa-envelope email-icon" />
                <p className="email m-0">Contato@xingufruit.com.br</p>
              </div>

              <div className="d-flex justify-content-end align-items-center social-icons">
                <Button className="social-icon" variant="outline-success" onClick={() => handleSocialClick("linkedin")}>
                  <i className="fab fa-linkedin" />
                </Button>
                <Button className="social-icon" variant="outline-success" onClick={() => handleSocialClick("facebook")}>
                  <i className="fab fa-facebook" />
                </Button>
                <Button className="social-icon" variant="outline-success" onClick={() => handleSocialClick("instagram")}>
                  <i className="fab fa-instagram" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`navbar navbar-expand-lg main_nav ${isSticky ? "sticky-nav" : ""}`}>
        <div className="container">
          <a
            className="navbar-brand"
            onClick={e => {
              e.preventDefault();
              handleClick();
            }}
          >
            <img className="img_logo" src={logo} alt="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/sobre">
                  A Xingu Fruit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/produtos">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/certificacoes">
                  Certificações
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/sustentabilidade">
                  Sustentabilidade
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/receitas">
                  Receitas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/noticias">
                  Noticias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_paginas" to="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuTop;
