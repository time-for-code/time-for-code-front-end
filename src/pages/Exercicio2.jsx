import { loadEvents } from '../../public/assets/js/exercicio2';
import '../../public/assets/css/exercicio2.css';
import { useEffect, useRef } from 'react';
import { toggleVisablity } from '../utils/utilidades.js'
import { Link } from '@tanstack/react-router';

export var mazeCanvas, virtCanvas, context, imgData, ctx;

const Exercicio2 = () => {
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
        <h2>Navegar o labirinto</h2>
        <div id="Message-Container">
          <div id="message">
            <h1>Parabéns!</h1>
            <p>Você finalizou a tarefa.</p>
            <p id="moves"></p>
            <Link to={"/exercise/3"}>
              <button id="okBtn">Legal!</button>
            </Link>
          </div>
        </div>
        <div className="background">
          <img className="wave" src="/img/wave.png" alt="wave" />
        </div>
        <div id="view">
          <div id="mazeContainer">
            <canvas id="mazeCanvas" className="border" height="1100" width="1100"></canvas>
          </div>
        </div>
        <div id="personagem" className="personagem" onClick={() => toggleVisablity('personagem')} style={{ visibility: 'visible' }}>
          <img src="/img/lilu.png" alt="Lilu" />
          <div className="text-content">
            <p id="instructions">Nevege o labirinto com as flechas do teclado e leve o robô até a sua casa.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exercicio2;
