import { Link } from "@tanstack/react-router";

const Conteudos = () => {
    return (
        <section id="conteudos" className="content-section">
            <div className="container">
                <h2>Explore os Conteúdos</h2>
                <div className="content-grid">
                    <div className="content-box">
                        <h3>Pintando o Arco-Íris</h3>
                        <p>Arraste e organize as cores na ordem correta do arco-íris.</p>
                        <Link to={'/exercise'} className="btn">Começar Jogo</Link>
                    </div>
                    <div className="content-box">
                        <h3>Robô no Labirinto</h3>
                        <p>Ajude o robô a sair do labirinto, organizando as instruções corretas.</p>
                        <a href="../pages/Exercicio2.jsx" className="btn">Começar Jogo</a>
                    </div>
                    <div className="content-box">
                        <h3>Caça ao Tesouro</h3>
                        <p>Encontre o tesouro seguindo padrões de pistas escondidas.</p>
                        <a href="../pages/Exercicio3.jsx" className="btn">Começar Jogo</a>
                    </div>
                    <div className="content-box">
                        <h3>Quebra-Cabeça Gicante</h3>
                        <p>Encontre o tesouro seguindo padrões de pistas escondidas.</p>
                        <a href="../pages/Exercicio4.jsx" className="btn">Começar Jogo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conteudos