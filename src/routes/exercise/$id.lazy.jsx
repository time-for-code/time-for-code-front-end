import { createLazyFileRoute } from '@tanstack/react-router'
import Exercicio1 from '../../pages/Exercicio1'
import Exercicio2 from '../../pages/exercicio2'
import Exercicio3 from '../../pages/Exercicio3'
import Exercicio4 from '../../pages/Exercicio4'

export const Route = createLazyFileRoute('/exercise/$id')({
  component: exerciseId,
})

function exerciseId() {
  const { id } = Route.useParams()
  const exercicios = {
    1: Exercicio1,
    2: Exercicio2,
    3: Exercicio3,
    4: Exercicio4,
  }

  const ExercicioComponent = exercicios[id] || (() => <div>Exercicio não encontrado</div>)

  return <ExercicioComponent />
}
