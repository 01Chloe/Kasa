import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import AppartmentPage from "../pages/AppartmentPage"
import Error from "../pages/Error"

export default function Router() {
  return (
    <Routes>
      <Route path="/Kasa" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/appartment/:id" element={<AppartmentPage />} />
      <Route path="/erreur" element={<Error />} />
      <Route path="/*" element={<Navigate to="/erreur" />} />
    </Routes>
  )
}
