import { createLazyFileRoute } from '@tanstack/react-router'
import Home from '../pages/Home'
import Header from '../components/Header'

export const Route = createLazyFileRoute('/home')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}
