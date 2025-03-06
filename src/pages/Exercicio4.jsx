import { toggleVisablity } from '../../public/assets/js/exercicio2';
import '../../public/assets/css/exercicio4.css';

const Exercicio4 = () => {
    return (
        <>
            <div className="container">
                <h1>Monte o Quebra-Cabeça</h1>
                <div className="puzzle-wrapper">
                    <div className="cells"></div>
                    <div className="puzzle"></div>
                    <div className="final-img"></div>
                    <div id="personagem" className="personagem" onClick={() => toggleVisablity('personagem')} style={{ visibility: 'visible' }}>
                        <img src="../public/img/soso.png" alt="Soso" />
                        <div className="text-content">
                            <p id="instructions">Ajude-me a montar o quebra-cabeça com a foto da nossa turma toda!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal">
                <div className="modal-content">
                    <h2 className="modal-heading">Parabéns!</h2>
                    <h3 className="modal-text">Você finalizou a tarefa.</h3>
                    <a href="home.ejs">
                        <button className="modal-btn btn">Finalizar</button>
                    </a>
                </div>
            </div>

            <div className="background">
                <div className="circle">
                    <div className="inner_circle"></div>
                </div>
                <div className="circle second">
                    <div className="inner_circle second_inner"></div>
                </div>
                <div className="circle third">
                    <div className="inner_circle third_inner"></div>
                </div>
                <div className="circle forth">
                    <div className="inner_circle"></div>
                </div>
            </div>

            <script src="../public/assets/js/exercicio4.js" type="text/javascript"></script>
        </>
    )
}

export default Exercicio4;