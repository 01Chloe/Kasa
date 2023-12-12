import whiteLogo from "../assets/logo_white.svg"
import "../styles/footer.scss"

export default function Footer() {
  return (
    <footer>
      <img src={whiteLogo} alt="Logo Kasa" />
      <div className="footer-parag">
        <p>© 2020 Kasa. All&nbsp;</p>
        <p>rights reserved</p>
      </div>
    </footer>
  )
}
