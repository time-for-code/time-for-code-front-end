import { toggleVisablity, makeMaze } from '../../public/assets/js/exercicio3';
import '../../public/assets/css/exercicio3.css'; 

const Exercicio3 = () => {
  return (
    <>
      <div id="page">
        <h2>Caça ao Tesouro</h2>
        <div id="Message-Container" onLoad={() => toggleVisablity('Message-Container')}>
          <div id="message">
            <h1>Parabéns!</h1>
            <p>Você finalizou a tarefa.</p>
            <p id="moves"></p>
            <a href="exercicio4.html">
              <button id="okBtn">Legal!</button>
            </a>
          </div>
        </div>

        <div className="background">
          <img className="wave" src="../public/img/wave2.png" alt="wave" />
          <img className="waveInverted" src="../public/img/wave3.png" alt="wave" />
        </div>

        <div id="view" onLoad={() => makeMaze()}>
          <div id="mazeContainer" style={{ visibility: 'visible' }}>
            <canvas id="mazeCanvas" className="border" height="1100" width="1100"></canvas>
          </div>
        </div>

        <div id="personagem" className="personagem" style={{ visibility: 'visible' }}>
          <img className="Cadu" src="../public/img/cadu.png" alt="Cadu" />
          <div className="text-content">
            <p id="instructions">Nevege o labirinto com as flechas do teclado e segue minhas instruções para encontrar o tesouro.</p>
          </div>
        </div>
      </div >
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
      <script type="text/javascript" src="../public/assets/js/exercicio3.js"></script>
    </>
  )
}

export default Exercicio3;