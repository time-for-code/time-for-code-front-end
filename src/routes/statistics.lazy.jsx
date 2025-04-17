import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../../public/assets/css/statistics.css";

export const Route = createLazyFileRoute("/statistics")({
  component: statisticsComponent,
});

function statisticsComponent() {
  const keys = Object.keys(localStorage).filter(key => key.startsWith('Exer'));
  const todosExer = keys.map(key => JSON.parse(localStorage.getItem(key)));

  const Star = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#FFD700"
      width="20px"
      height="20px"
      className="star-icon"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.172L12 18.897l-7.334 3.872 1.4-8.172L.132 9.21l8.2-1.192z" />
    </svg>
  );

  return (
    <>
      <div className="statistics-container">
        {console.log(localStorage)}
        {console.log(todosExer[3][3])}
        <div id="resultado">
          <div className="title-container">
            <h1>Estatísticas</h1>
            <div className="star-container">
              <Star /> <Star /> <Star />
            </div>
          </div>
          <div className="statistics-grid">
            <div className="exercise-card">
              <p className="exercise-title">
                <strong>Exercicio 1</strong>
              </p>
              <div className="exercise-details">
                <p>
                  <strong>Exercicio Concluido:</strong> {todosExer[0][0]}
                </p>
                <p>
                  <strong>Tentativas:</strong> {todosExer[0][1]}
                </p>
                <p>
                  <strong>Tempo de Conclusão:</strong> {todosExer[0][2]} segundos
                </p>
              </div>
              <div className="star-container">
                <Star /> <Star />
              </div>
            </div>

            <div className="exercise-card">
              <p className="exercise-title">
                <strong>Exercicio 2</strong>
              </p>
              <div className="exercise-details">
                <p>
                  <strong>Exercicio Concluido:</strong> {todosExer[1][0]}
                </p>
                <p>
                  <strong>Tentativas:</strong> {todosExer[1][1]}
                </p>
                <p>
                  <strong>Tempo de Conclusão:</strong> {todosExer[1][2]} segundos
                </p>
              </div>
              <div className="star-container">
                <Star /> <Star /> <Star />
              </div>
            </div>

            <div className="exercise-card">
              <p className="exercise-title">
                <strong>Exercicio 3</strong>
              </p>
              <div className="exercise-details">
                <p>
                  <strong>Tempo de Conclusão:</strong> {todosExer[2][0]}
                </p>
                <p>
                  <strong>Tentativas:</strong> {todosExer[2][1]}
                </p>
                <p>
                  <strong>Tempo Total:</strong> {todosExer[2][2]} segundos
                </p>
              </div>
              <div className="star-container">
                <Star />
              </div>
            </div>

            <div className="exercise-card">
              <p className="exercise-title">
                <strong>Exercicio 4</strong>
              </p>
              <div className="exercise-details">
                <p>
                  <strong>Exercicio Concluido:</strong> {todosExer[3][0]}
                </p>
                <p>
                  <strong>Tentativas:</strong> {todosExer[3][1]}
                </p>
                <p>
                  <strong>Tempo de Conclusão:</strong> {todosExer[3][2]} segundos
                </p>
              </div>
              <div className="star-container">
                <Star /> <Star /> <Star /> <Star />
              </div>
            </div>
          </div>
          <Link to={"/home"}>
            <button className="btn finish-btn" onClick={() => localStorage.clear()}>
              Finalizar Atividade
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
