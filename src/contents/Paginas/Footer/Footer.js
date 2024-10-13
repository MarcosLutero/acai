import React from "react";
import "./index.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">


                {/* Seções de links */}
                <div className="footer-section">
                    <h4><strong>Empresa</strong></h4>
                    <ul>
                        <li>A Xingu Fruit</li>
                        <li> Produto</li>
                        <li>Noticias</li>
                        <li>Contato</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4><strong>Produtos</strong></h4>
                    <ul>
                        <li>Açaí</li>
                        <li>Sorbre</li>
                        <li>Polpas de Frutas</li>
                        <li>Exportação</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4><strong>Frutas do Xingu</strong></h4>
                    <ul>
                        <li>Contato@xingufruit.com.br</li>
                        <li>Rodovia Castanhal/inhangapi KM 07 - SN CEP 68746-889 Castanhal-PA</li>
                        <li>(85) 99630-8944</li>
                        <li>28.151.393/0002-34 </li>
                        <li>Xingu Fruit Polpas de Frutas Indústria e comercio LTDA</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4><strong>Siga-nos nas redes sociais</strong></h4>
                    <div className="d-flex justify-content-evenly align-items-center social-icons">
                       <div className="social-icon">
                            <i className="fab fa-linkedin" />
                        </div>
                       <div className="social-icon">
                            <i className="fab fa-facebook" />
                        </div>
                       <div className="social-icon">
                            <i className="fab fa-instagram" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Direitos autorais &copy; | Todos os direitos reservados por Xingu fruit.</p>
            </div>

        </footer>
    );
}

export default Footer;
