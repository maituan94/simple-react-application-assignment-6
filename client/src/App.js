import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './_global.scss'
import { Header, Footer } from './layout'
import Home from './pages/home'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='*'
          element={<Navigate to='/' replace />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}
