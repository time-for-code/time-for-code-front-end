import { createLazyFileRoute } from '@tanstack/react-router'
import Login from '../pages/Login'

export const Route = createLazyFileRoute('/login')({
  component: LoginComponent,
})

function LoginComponent() {
  return <Login />
}
