import { Link } from "react-router-dom"
import "../styles/error.scss"

export default function Error() {
  return (
    <div className="error">
      <h1 className="error-title">404</h1>
      <p className="error-parag">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
