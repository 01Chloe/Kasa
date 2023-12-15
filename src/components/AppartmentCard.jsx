import "../styles/appartmentCard.scss"
import { Link } from "react-router-dom"

export default function AppartmentCard({ item }) {
  return (
    <Link to={"/appartment/" + item.id} className="appartment-card-link">
      <article className="appartment-card-content">
        <img
          src={item.cover}
          alt={item.title}
          className="appartment-card-image"
        />
        <h2 className="card-title">{item.title}</h2>
      </article>
    </Link>
  )
}
