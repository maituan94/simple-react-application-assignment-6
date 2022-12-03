import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './_global.scss'
import Home from './pages/home'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='*'
          element={<Navigate to='/' replace />}
        />
      </Routes>
    </Router>
  )
}
