import { createLazyFileRoute } from '@tanstack/react-router'
import Cadastro from '../pages/Cadastro'

export const Route = createLazyFileRoute('/register')({
  component: RegisterComponent,
})

function RegisterComponent() {
  return <Cadastro />
}
