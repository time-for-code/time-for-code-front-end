import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../../public/assets/css/statistics.css";

export const Route = createLazyFileRoute("/statistics")({
  component: statisticsComponent,
});

function statisticsComponent() {
  const keys = Object.keys(localStorage).filter((key) =>
    key.startsWith("Exer")
  );
  const todosExer = keys.map((key) => JSON.parse(localStorage.getItem(key)));
  console.log(todosExer)



  return (
    <div className="statistics-container">
      <div className="title-container">
        <h1>Parabéns</h1>
        <p>Você concluiu todas os exercícios</p>
      </div>
      <div className="statistics-content">
        <div className="statistics-grid">
          <div
            className="exercise-card"
            style={{ borderRight: "5px solid #D5C2E0" }}
          >
            <div className="star-container">
              <Star width={"28px"} height={"28px"}/>
            </div>
            <div className="points-container">
              <div className="points">
                <li className="pi pi-plus" style={{ color: "#dbc4f8" }}></li>
                <strong>{todosExer[0][3]} 50 XP</strong>
              </div>
            </div>
            <p className="exercise-title">
              <strong>Exercicio 1</strong>
            </p>
            <div className="exercise-details">
              <div className="data">
                <li className="pi pi-hourglass"></li>
                <strong>{todosExer[0][2]} s</strong>
              </div>
              <div className="data">
                <li className="pi pi-refresh"></li>
                <strong>{todosExer[0][1]}</strong>
              </div>
            </div>
            <progress value={30} max={100}></progress>
            Concluido
          </div>
          <div
            className="exercise-card"
            style={{ borderRight: "5px solid #F8DD56" }}
          >
            <div className="star-container">
              <Star />
            </div>
            <div className="points-container">
              <div className="points">
                <li className="pi pi-plus" style={{ color: "#dbc4f8" }}></li>
                <strong>{todosExer[0][3]} 50 XP</strong>
              </div>
            </div>
            <p className="exercise-title">
              <strong>Exercicio 2</strong>
            </p>
            <div className="exercise-details">
              <div className="data">
                <li className="pi pi-hourglass"></li>
                <strong>{todosExer[1][2]} s</strong>
              </div>
              <div className="data">
                <li className="pi pi-refresh"></li>
                <strong>{todosExer[1][1]}</strong>
              </div>
            </div>
            <progress value={30} max={100}></progress>
            Concluido
          </div>
          <div
            className="exercise-card"
            style={{ borderRight: "5px solid #C2DAD6" }}
          >
            <div className="star-container">
              <Star />
            </div>
            <div className="points-container">
              <div className="points">
                <li className="pi pi-plus" style={{ color: "#dbc4f8" }}></li>
                <strong>{todosExer[2][3]} 50 XP</strong>
              </div>
            </div>
            <p className="exercise-title">
              <strong>Exercicio 3</strong>
            </p>
            <div className="exercise-details">
              <div className="data">
                <li className="pi pi-hourglass"></li>
                <strong>{todosExer[2][2]} s</strong>
              </div>
              <div className="data">
                <li className="pi pi-refresh"></li>
                <strong>{todosExer[2][1]}</strong>
              </div>
            </div>
            <progress value={30} max={100}></progress>
            Concluido
          </div>
          <div
            className="exercise-card"
            style={{ borderRight: "5px solid #78BD77" }}
          >
            <div className="star-container">
              <Star />
            </div>
            <div className="points-container">
              <div className="points">
                <li className="pi pi-plus" style={{ color: "#dbc4f8" }}></li>
                <strong>{todosExer[3][3]} 50 XP</strong>
              </div>
            </div>
            <p className="exercise-title">
              <strong>Exercicio 4</strong>
            </p>
            <div className="exercise-details">
              <div className="data">
                <li className="pi pi-hourglass"></li>
                <strong>{todosExer[3][2]} s</strong>
              </div>
              <div className="data">
                <li className="pi pi-refresh"></li>
                <strong>{todosExer[3][1]}</strong>
              </div>
            </div>
            <progress value={30} max={100}></progress>
            Concluido
          </div>
        </div>
      </div>
      <Link to={"/home"}>
        <button className="btn finish-btn" onClick={() => localStorage.clear()}>
          Finalizar Atividade
        </button>
      </Link>
    </div>
  );
}

  /*
  gold:#C9B037
  silver:#B4B4B4
  bronze:#CD7F32
  */

export const Star = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#C9B037"
    width={width ? width : "80px"}
    height={height ? height : "80px"}
    className="star-icon"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.172L12 18.897l-7.334 3.872 1.4-8.172L.132 9.21l8.2-1.192z" />
  </svg>
);