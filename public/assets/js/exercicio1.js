let pontuacao = 0;
let tentativas = 0;
let concluido = false;
let tempoInicial = new Date();

// Função para verificar o resultado e mostrar a opção de "Finalizar Atividade"
export function verificarResultado() {
  tentativas++;

  // Obter as cores dos slots
  const slots = Array.from(document.querySelectorAll(".slot")).map(
    (slot) => slot.style.backgroundColor
  );
  const coresCorretas = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  // Verificar se a sequência está correta
  const acertou = JSON.stringify(slots) === JSON.stringify(coresCorretas);
  const resultadoDiv = document.getElementById("resultado");
  if (acertou) {
    pontuacao += 10; // Pontuação ao acertar
    resultadoDiv.innerHTML =
      "<p>Parabéns! Você organizou as cores corretamente!</p>";
    concluido = true;
    exibirEstatisticas(); // Exibe as estatísticas
    mostrarBotaoFinalizar(); // Exibe o botão para finalizar a atividade
  } else {
    resultadoDiv.innerHTML =
      "<p>Ops! A sequência está incorreta. Tente novamente!</p>";
  }
}

// Função para exibir o botão de "Finalizar Atividade"
export function mostrarBotaoFinalizar() {
  const finalizarBtn = `
        <button class="btn" onclick="proximoExercicio()">Finalizar Atividade</button>
    `;
  document.getElementById("resultado").innerHTML += finalizarBtn;
}

// Função para redirecionar à home
export function proximoExercicio() {
  window.location.href = "/exercise/2";
}

// Função para exibir as estatísticas finais
export function exibirEstatisticas() {
    const tempoTotal = ((new Date() - tempoInicial) / 1000) // Calcula o tempo em segundos
    const estatisticasHTML = `
        <div class="estatisticas">
            <p><strong>Estatísticas:</strong></p>
            <p><strong>Pontuação:</strong> ${pontuacao}</p>
            <p><strong>Tentativas:</strong> ${tentativas}</p>
            <p><strong>Tempo Total:</strong> ${tempoTotal.toFixed(2)} segundos</p>
        </div>
    `;
  const dados = [concluido, tentativas, tempoTotal.toFixed(2)];
  localStorage.setItem("Exer1", JSON.stringify(dados));
  document.getElementById("resultado").innerHTML += estatisticasHTML;
}

// Função para reiniciar o exercício
export function reiniciarExercicio() {
  tentativas = 0;
  pontuacao = 0;
  document.getElementById("resultado").innerHTML = "";
  tempoInicial = new Date();
  // Limpa os slots
  const slots = document.querySelectorAll(".slot");
  slots.forEach((slot) => (slot.style.backgroundColor = ""));
  // Habilita todos os elementos de cor novamente
  const cores = document.querySelectorAll(".color");
  cores.forEach((color) => {
    color.setAttribute("draggable", "true");
    color.style.opacity = "1"; // Resetar a opacidade
  });
  // Embaralha novamente as cores
  embaralharCores();
}

// Função para embaralhar as cores
export function embaralharCores() {
  const cores = document.querySelectorAll(".color");
  const colorArray = Array.from(cores);
  const shuffledColors = colorArray.sort(() => Math.random() - 0.5);
  const palette = document.querySelector(".color-palette");

  // Remove todos os filhos e reanexa os cores embaralhadas
  palette.innerHTML = "";
  shuffledColors.forEach((color) => {
    palette.appendChild(color);
  });
}

// Função para definir a cor do slot como a cor arrastada
export function drop(e) {
  e.preventDefault();
  const colorId = e.dataTransfer.getData("color");
  const colorElement = document.getElementById(colorId);

  // Define a cor do slot como a cor arrastada
  e.target.style.backgroundColor = colorElement.style.backgroundColor;

  // Desabilitar a cor para não ser arrastada novamente
  colorElement.setAttribute("draggable", "false");
  colorElement.style.opacity = "0.5"; // Opcional: Diminuir a opacidade para indicar que não pode mais ser usada
}

// Função para iniciar o arrasto
export function dragStart(e) {
  e.dataTransfer.setData("color", e.target.id);
}

// Função para permitir o arrasto sobre um elemento
export function dragOver(e) {
  e.preventDefault();
}
