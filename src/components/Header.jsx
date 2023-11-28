import { NavLink } from "react-router-dom"
import LogoDesktop from "../assests/logo_desktop.png"
import LogoMobile from "../assests/logo_mobile.png"
import "../styles/header.scss"

export default function Header() {
  return (
    <div className="header">
      <img src={LogoDesktop} alt="Logo Kasa" className="logo-desktop" />
      <img src={LogoMobile} alt="Logo Kasa" className="logo-mobile" />
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
    </div>
  )
}
