import { Link } from "@tanstack/react-router";
import '../../public/assets/css/index.css';
import { useUser } from "../contexts/UserContext";

const Header = () => {
    const { user } = useUser();
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="teste.html" className="logo"></a>
                            <ul className="nav flex-container">
                                <li className="scroll-to-section">
                                    <div><Link to={user ? '/home' : '/'} className="active">Home</Link></div>
                                </li>
                                <li className="scroll-to-section"><a href="#top" className="active">Sobre</a></li>
                                <li className="scroll-to-section"><a href="#services">Conteúdos</a></li>
                                {user ? (
                                    <li className="scroll-to-section">
                                        <div className="login-button"><Link to={'/performance'}>Relatório</Link></div>
                                    </li>
                                ) : (
                                    <>
                                        <li className="scroll-to-section">
                                            <div className="login-button"><Link to={'/login'}>Login</Link></div>
                                        </li>
                                        <li className="scroll-to-section">
                                            <div className="border-first-button"><Link to={'/register'}>Criar conta</Link></div>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;