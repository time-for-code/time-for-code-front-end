import { createLazyFileRoute } from "@tanstack/react-router";
import "../../public/assets/css/performance.css";
import Header from "../components/Header";

export const Route = createLazyFileRoute("/performance")({
  component: PerformanceComponent,
});

function PerformanceComponent() {
  const pillars = [
    { name: "Decomposição", img: "/img/ana.png", lessons: 8, total: 10 },
    {
      name: "Reconhecimento de Padrões",
      img: "/img/lilu.png",
      lessons: 6,
      total: 10,
    },
    { name: "Abstração", img: "/img/soso.png", lessons: 7, total: 10 },
    { name: "Algoritmos", img: "/img/cadu.png", lessons: 9, total: 10 },
  ];

  const exercises = [
    { name: "Exercício 1", time: "10m", tries: 2, completed: true },
    { name: "Exercício 2", time: "15m", tries: 3, completed: false },
    { name: "Exercício 3", time: "12m", tries: 1, completed: true },
    { name: "Exercício 4", time: "8m", tries: 1, completed: true },
  ];

  return (
    <>
      <Header />
      <div className="layout">
        <div className="summary-section">
          <h1>Resumo</h1>
        </div>
        <div className="pilares-section">
          {pillars.map((pillar, index) => (
            <div className="card-pilars" key={index}>
              <div className="card-info">
                <img src={pillar.img} alt={pillar.name}></img>
                <h2>{pillar.name}</h2>
              </div>
              <div className="card-graphic">
                <svg>
                  <circle
                    cx={70}
                    cy={70}
                    r={60}
                    className="background-circle"
                  ></circle>
                  <circle
                    cx={70}
                    cy={70}
                    r={60}
                    className="progress-circle"
                    style={{
                      strokeDasharray: `${(pillar.lessons / pillar.total) * 440}, 440`,
                    }}
                  ></circle>
                </svg>
                <div className="percentage">
                  {`${pillar.lessons}/${pillar.total}`}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="info">
          <div className="exercises-section">
            <h2>Exercícios</h2>
            <table className="exercises-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tempo</th>
                  <th>Tentativas</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise, index) => (
                  <tr
                    key={index}
                    className={exercise.completed ? "completed" : "incomplete"}
                  >
                    <td>{exercise.name}</td>
                    <td>{exercise.time}</td>
                    <td>{exercise.tries}</td>
                    <td>
                      <span
                        className={`status-button ${
                          exercise.completed ? "completed" : "incomplete"
                        }`}
                      >
                        {exercise.completed ? "Concluído" : "Não Concluído"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
