import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import Login from "./pages/Auth/Login"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="overview" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
