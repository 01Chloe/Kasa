import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import AppartmentPage from "../pages/AppartmentPage"
import Error from "../pages/Error"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/appartment/:id" element={<AppartmentPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
