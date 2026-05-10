import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Log from './pages/Log'
import Meals from './pages/Meals'
import Plan from './pages/Plan'
import Goals from './pages/Goals'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<Log />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/goals" element={<Goals />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}