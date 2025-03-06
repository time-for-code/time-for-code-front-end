import { createLazyFileRoute } from '@tanstack/react-router'
import Exercicio1 from '../pages/exercicio1'

export const Route = createLazyFileRoute(`/exercise`)({
  component: ExerciseComponent,
})

function ExerciseComponent() {
  return <Exercicio1 />
}
