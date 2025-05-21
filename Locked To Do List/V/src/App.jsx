import { useState } from 'react'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import Todo from './Components/Todo'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
