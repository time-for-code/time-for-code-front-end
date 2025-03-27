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
                        <Link to={'/exercise/$id'} params={{ id: 1 }} className="btn">Começar Jogo</Link>
                    </div>
                    <div className="content-box">
                        <h3>Robô no Labirinto</h3>
                        <p>Ajude o robô a sair do labirinto, organizando as instruções corretas.</p>
                        <Link to={'/exercise/$id'} params={{ id: 2 }} className="btn">Começar Jogo</Link>
                    </div>
                    <div className="content-box">
                        <h3>Caça ao Tesouro</h3>
                        <p>Encontre o tesouro seguindo padrões de pistas escondidas.</p>
                        <Link to={'/exercise/$id'} params={{ id: 3 }} className="btn">Começar Jogo</Link>
                    </div>
                    <div className="content-box">
                        <h3>Quebra-Cabeça Gigante</h3>
                        <p>Encontre o tesouro seguindo padrões de pistas escondidas.</p>
                        <Link to={'/exercise/$id'} params={{ id: 4 }} className="btn">Começar Jogo</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conteudos