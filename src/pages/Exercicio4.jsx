import { toggleVisablity } from '../utils/utilidades.js'
import "../../public/assets/css/exercicio4.css";
import { useEffect, useRef } from "react";
import { addDraggableDivs, createElments, dragDropEvents } from "../../public/assets/js/exercicio4";
import { Link } from '@tanstack/react-router';

const Exercicio4 = () => {
  const elementsCreated = useRef(false);

  useEffect(() => {
    if (elementsCreated.current) return;

    let puzzle = document.querySelector(".puzzle");
    let cellsAmount = 20;
    let puzzleDivs = [];
    let draggableDivs = [];
    let cells = document.querySelector(".cells");
    let modal = document.querySelector(".modal");
    let modalBtn = document.querySelector(".modal-btn");
    let attempt = document.querySelector(".attempt");

    createElments(puzzle, puzzleDivs, draggableDivs, cellsAmount);
    addDraggableDivs(draggableDivs, cells);
    dragDropEvents(draggableDivs, puzzleDivs, modal, cellsAmount, attempt, modalBtn);

    elementsCreated.current = true;
  }, []);

  return (
    <>
      <div className="container">
        <h1>Monte o Quebra-Cabeça</h1>
        <div className="puzzle-wrapper">
          <div className="cells"></div>
          <div className="puzzle"></div>
          <div className="final-img"></div>
          <div
            id="personagem"
            className="personagem"
            onClick={() => toggleVisablity("personagem")}
            style={{ visibility: "visible" }}
          >
            <img src="../public/img/soso.png" alt="Soso" />
            <div className="text-content">
              <p id="instructions">
                Ajude-me a montar o quebra-cabeça com a foto da nossa turma
                toda!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal">
        <div className="modal-content">
          <h2 className="modal-heading">Parabéns!</h2>
          <h3 className="modal-text">Você finalizou a tarefa.</h3>
          <Link to={'/home'}>
            <button className="modal-btn btn">Finalizar</button>
          </Link>
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
    </>
  );
};

export default Exercicio4;