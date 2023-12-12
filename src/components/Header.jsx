import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"
import "../styles/header.scss"

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" className="logo" />
      <nav className="header-navigation">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
