import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import Login from "./pages/Auth/Login"
import Feedback from "./pages/Feedback"
import Home from "./pages/Home"
import Survey from "./pages/Survey"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey" element={<Survey />} />
        <Route path="login" element={<Login />} />
        <Route path="thank-you" element={<Feedback />} />
        <Route path="overview" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
