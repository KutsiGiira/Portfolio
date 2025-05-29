import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ChangePassword from './components/ChangePassword'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  )
}

export default App