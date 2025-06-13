export function createElments(puzzle, puzzleDivs, draggableDivs, cellsAmount) {
  for (let index = 0; index < cellsAmount; index++) {
    const puzzleDiv = document.createElement("div");
    puzzleDiv.setAttribute("data-index", index);
    puzzle.append(puzzleDiv);
    puzzleDivs.push(puzzleDiv);

    const draggableDiv = document.createElement("div");
    draggableDiv.setAttribute("data-index", index);
    draggableDiv.setAttribute("draggable", true);
    draggableDivs.push(draggableDiv);
  }
}

const leftPositions = [0, 6, 12, 18, 24];
const topPositions = [0, 4, 8, 12];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function shufflePositions() {
  return shuffle(leftPositions)
    .map((leftPosition) => {
      return shuffle(topPositions).map((topPosition) => [
        leftPosition,
        topPosition,
      ]);
    })
    .reduce((positions, item) => [...positions, ...item]);
}

function bgPositions() {
  return topPositions
    .map((topPosition) => {
      return leftPositions.map((leftPosition) => [topPosition, leftPosition]);
    })
    .reduce((positions, item) => [...positions, ...item]);
}

export function addDraggableDivs(draggableDivs, cells) {
  let Positions = bgPositions();
  let shufflePosition = shufflePositions();

  draggableDivs.forEach((div, i) => {
    div.style.backgroundImage = 'url("/img/grupoMascotes.png")';
    cells.append(div);
    div.style.backgroundPosition = `-${Positions[i][1]}vw -${Positions[i][0]}vw`;
    div.style.left = `${shufflePosition[i][0]}vw`;
    div.style.top = `${shufflePosition[i][1]}vw`;
  });
}

let selected = 0;
let points = { correct: 0, wrong: 0 };
let tentativas = 0;
let tempoInicial = new Date();
let concluido = false;

export function dragDropEvents(
  draggableDivs,
  puzzleDivs,
  modal,
  cellsAmount,
  attempt,
  modalBtn
) {
  draggableDivs.forEach((draggableDiv, i) => {
    draggableDiv.addEventListener("dragstart", (e) => {
      selected = e.target;
      console.log(selected);
      console.log("dragstart");
    });
    puzzleDivs[i].addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("dragover");
    });
    puzzleDivs[i].addEventListener("drop", () => {
      if (puzzleDivs[i].children.length === 0) {
        selected.style.top = 0;
        selected.style.left = 0;
        selected.style.border = "none";
        console.log(selected);
        puzzleDivs[i].append(selected);

        if (selected.dataset.index === puzzleDivs[i].dataset.index) {
          points.correct = 0;
          puzzleDivs.forEach((div) => {
            div.firstElementChild &&
              div.dataset.index === div.firstElementChild.dataset.index &&
              points.correct++;
          });
        } else {
          points.wrong++;
        }
        console.log(points);

        if (points.correct === cellsAmount) {
          console.log("passei aqui !");
          modal.style.cssText = "opacity: 1; visibility: visible;";
        //   attempt.textContent = points.wrong;
          modalBtn.onclick = () => location.reload();
          concluido = true;
          const tempoTotal = (new Date() - tempoInicial) / 1000; // Calcula o tempo em segundos
          const dados = [concluido, tentativas, tempoTotal.toFixed(2)];
          localStorage.setItem("Exer4", JSON.stringify(dados));
        }
      }
    });
    puzzleDivs[i].addEventListener("dragenter", () => {
      puzzleDivs[i].classList.add("active");
    });
    puzzleDivs[i].addEventListener("dragleave", () => {
      console.log("leave");
      puzzleDivs[i].classList.remove("active");
    });
  });
}
