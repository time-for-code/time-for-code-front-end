import { Link } from "@tanstack/react-router";
import "../../public/assets/css/header.css";
import { useUser } from "../contexts/UserContext";
import "../../public/assets/css/index.css";

const Header = () => {
  const { user } = useUser();
  
  return (
    <header
      className="header-container"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="logo">
        <a href={user ? "/home" : "/"}>
          <img src="/img/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="header-nav">
        <nav className="main-nav">
          <ul className="flex-container">
            <li className="scroll-to-section">
              <div>
                <Link
                  reloadDocument="true"
                  to={user ? "/home" : "/"}
                  className="active"
                >
                  Home
                </Link>
              </div>
            </li>
            <li className="scroll-to-section">
              <a href="#top" className="active">
                Sobre
              </a>
            </li>
            <li className="scroll-to-section">
              <a href="#services">Conteúdos</a>
            </li>
            {user ? (
              <li className="scroll-to-section">
                <div className="login-button">
                  <Link reloadDocument="true" to={"/performance"}>
                    Relatório
                  </Link>
                </div>
              </li>
            ) : (
              <>
                <li className="scroll-to-section">
                  <div className="login-button">
                    <Link reloadDocument="true" to={"/login"}>
                      Login
                    </Link>
                  </div>
                </li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <Link reloadDocument="true" to={"/register"}>
                      Criar conta
                    </Link>
                  </div>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;