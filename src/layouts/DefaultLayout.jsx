import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const DefaultLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>
    </div>
  )
}

export default DefaultLayout