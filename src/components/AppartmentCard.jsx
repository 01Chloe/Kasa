import "../styles/appartmentCard.scss"
import { Link } from "react-router-dom"

export default function AppartmentCard({ item }) {
  return (
    <Link to={"/appartment/:" + item.id} className="appartment-card-link">
      <div className="appartment-card-content">
        <img
          src={item.cover}
          alt={item.title}
          className="appartment-card-image"
        />
        <div className="card-overlay"></div>
        <p className="card-title">{item.title}</p>
      </div>
    </Link>
  )
}
