import { toggleVisablity, makeMaze } from '../../public/assets/js/exercicio2';
import '../../public/assets/css/exercicio2.css';

const Exercicio2 = () => {
  return (
    <>
      <div id="page">
        <h2>Navegar o labirinto</h2>
        <div id="Message-Container" onLoad={() => toggleVisablity('Message-Container')}>
          <div id="message">
            <h1>Parabéns!</h1>
            <p>Você finalizou a tarefa.</p>
            <p id="moves"></p>
            <a href="exercicio3.html">
              <button id="okBtn">Legal!</button>
            </a>
          </div>
        </div>

        <div className="backgorund">
          <img className="wave" src="../public/img/wave.png" alt="wave" />
          <img className="waveInverted" src="../public/img/wave.png" alt="wave" />
        </div>

        <div id="view" onLoad={() => makeMaze()}>
          <div id="mazeContainer">
            <canvas id="mazeCanvas" className="border" height="1100" width="1100"></canvas>
          </div>
        </div>

        <div id="personagem" className="personagem" onClick={() => toggleVisablity('personagem')} style={{ visibility: 'visible' }}>
          <img src="../public/img/lilu.png" alt="Lilu" />
          <div className="text-content">
            <p id="instructions">Nevege o labirinto com as flechas do teclado e leve o robô até a sua casa.</p>
          </div>
        </div>
      </div>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
      <script src="../public/assets/js/exercicio2.js"></script>
    </>
  )
}

export default Exercicio2;