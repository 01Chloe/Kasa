import { Link } from "react-router-dom"
import "../styles/error.scss"

export default function Error() {
  return (
    <main className="error">
      <h1 className="error-title">404</h1>
      <p className="error-parag">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link to="/Kasa" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}
