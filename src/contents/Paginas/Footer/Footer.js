import React from "react";
import logo from "../../images/logo-xingu2.png"
import "./index.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Seção do logotipo */}
                <div className="footer-section logo-section">
                    <img src={logo} alt="Logo IBM" className="footer-logo" />
                </div>

                {/* Seções de links */}
                <div className="footer-section">
                    <h4><strong>Empresa</strong></h4>
                    <ul>
                        <li><a href="#"> A Xingu Fruit</a></li>
                        <li><a href="#"> Produtos</a></li>
                        <li><a href="#">Noticias</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4><strong>Produtos</strong></h4>
                    <ul>
                        <li><a href="#">Açaí</a></li>
                        <li><a href="#">Sorbet</a></li>
                        <li><a href="#">Polpas de Frutas</a></li>
                        <li><a href="#">Exportação</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4><strong>Frutas do Xingu</strong></h4>
                    <ul>
                        <li><a href="#">Contato@xingufruit.com.br</a></li>
                        <li><a href="#">Rodovia Castanhal/inhangapi KM 07 - SN CEP 68746-889 Castanhal-PA</a></li>
                        <li><a href="#">(85) 99630-8944</a></li>
                        <li><a href="#">28.151.393/0002-34 </a></li>
                        <li><a href="#">Xingu Fruit Polpas de Frutas Indústria e comercio LTDA</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4><strong>Siga-nos nas redes sociais</strong></h4>
                    <ul>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"> <i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Direitos autorais &copy; | Todos os direitos reservados por Xingu fruit.</p>
            </div>

        </footer>
    );
}

export default Footer;
