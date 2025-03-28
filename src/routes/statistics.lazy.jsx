import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../../public/assets/css/exercicio1.css";

export const Route = createLazyFileRoute("/statistics")({
  component: statisticsComponent,
});

function statisticsComponent() {
  const keys = Object.keys(localStorage).filter(key => key.startsWith('Exer'));
  const todosExer = keys.map(key => JSON.parse(localStorage.getItem(key)));
  
  return (
    <>
      <div>
        {console.log(localStorage)}
        {console.log(todosExer[3][3])}
        <div id="resultado">
          <div className="estatisticas">
            <p>
              <strong>Estatísticas:</strong>
            </p>
            <p>
              <strong>Exercicio 1</strong>
            </p>
            <p>
              <strong>Exercicio Concluido:</strong> {todosExer[0][0]}
            </p>
            <p>
              <strong>Tentativas:</strong> {todosExer[0][1]}
            </p>
            <p>
              <strong>Tempo de Conclusão:</strong> {todosExer[0][2]} segundos
            </p>

            <p>
              <strong>Exercicio 2</strong>
            </p>
            <p>
              <strong>Exercicio Concluido:</strong> {todosExer[1][0]}
            </p>
            <p>
              <strong>Tentativas:</strong> {todosExer[1][1]}
            </p>
            <p>
              <strong>Tempo de Conclusão:</strong> {todosExer[1][2]} segundos
            </p>

            <p>
              <strong>Exercicio 3</strong>
            </p>
            <p>
              <strong>Tempo de Conclusão:</strong> {todosExer[2][0]}
            </p>
            <p>
              <strong>Tentativas:</strong> {todosExer[2][1]}
            </p>
            <p>
              <strong>Tempo Total:</strong> {todosExer[2][2]} segundos
            </p>

            <p>
              <strong>Exercicio 4</strong>
            </p>
            <p>
              <strong>Exercicio Concluido:</strong> {todosExer[3][0]}
            </p>
            <p>
              <strong>Tentativas:</strong> {todosExer[3][1]}
            </p>
            <p>
              <strong>Tempo de Conclusão:</strong> {todosExer[3][2]} segundos
            </p>
            <Link to={"/home"}>
              <button className="btn" onClick={() => localStorage.clear()}>
                Finalizar Atividade
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
