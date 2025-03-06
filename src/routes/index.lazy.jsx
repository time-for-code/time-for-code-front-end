import { createLazyFileRoute } from '@tanstack/react-router'
import Index from '../pages'
import React from 'react'
import '../../public/assets/css/index.css'
import Header from '../components/Header'

export const Route = createLazyFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <React.Fragment>
      <Header />
      <Index />
    </React.Fragment>
  )
}
