import { loadEvents } from '../../public/assets/js/exercicio3';
import '../../public/assets/css/exercicio3.css';
import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';

export var mazeCanvas, virtCanvas, context, imgData, ctx;

const Exercicio3 = () => {
  const elementsCreated = useRef(false);

  useEffect(() => {
    if (elementsCreated.current) return;

    mazeCanvas = document.getElementById("mazeCanvas");
    virtCanvas = document.createElement("canvas");
    context = virtCanvas.getContext("2d");
    imgData = context.getImageData(0, 0, 500, 500);
    ctx = mazeCanvas.getContext("2d");

    loadEvents();
    elementsCreated.current = true;
  }, []);

  return (
    <>
      <div id="page">
        <h2>Caça ao Tesouro</h2>
        <div id="Message-Container">
          <div id="message">
            <h1>Parabéns!</h1>
            <p>Você finalizou a tarefa.</p>
            <p id="moves"></p>
            <Link to={'/exercise/4'}>
              <button id="okBtn">Legal!</button>
            </Link>
          </div>
        </div>

        <div className="background">
          <img className="wave" src="/img/wave2.png" alt="wave" />
          <img className="waveInverted" src="/img/wave3.png" alt="wave" />
        </div>

        <div id="view">
          <div id="mazeContainer" style={{ visibility: 'visible' }}>
            <canvas id="mazeCanvas" className="border" height="1100" width="1100"></canvas>
          </div>
        </div>

        <div id="personagem" className="personagem" style={{ visibility: 'visible' }}>
          <img className="Cadu" src="/img/cadu.png" alt="Cadu" />
          <div className="text-content">
            <p id="instructions">Nevege o labirinto com as flechas do teclado e segue minhas instruções para encontrar o tesouro.</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default Exercicio3;