import "../styles/appartmentDetail.scss"
import RatingPink from "../assets/rating-pink.jpg"
import RatingGrey from "../assets/rating-grey.jpg"

export default function AppartmentDetail({ appartment }) {
  const renderStars = (rating) => {
    const stars = []
    const totalStars = 5
    const coloredStars = parseInt(rating)

    for (let i = 0; i < totalStars; i++) {
      const starImage = i < coloredStars ? RatingPink : RatingGrey
      stars.push(
        <img
          key={i}
          src={starImage}
          alt={`Note ${i + 1} sur 5`}
          className="star"
        />
      )
    }

    return stars
  }

  const altText = `Voici ${appartment.host.name}, propriétaire de l'appartement`

  return (
    <div className="appartment-details">
      <div className="appartment-infos-principal">
        <h1 className="appartment-detail-title">{appartment.title}</h1>
        <p className="appartment-detail-location">{appartment.location}</p>
        <div className="appartment-detail-tags">
          {appartment.tags.map((tag, index) => (
            <div key={index} className="appartment-detail-tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="appartment-infos-secondary">
        <div className="appartment-rating">
          {renderStars(appartment.rating)}
        </div>
        <div className="appartment-host">
          <p className="host-name">{appartment.host.name}</p>
          <img
            src={appartment.host.picture}
            alt={altText}
            className="host-picture"
          />
        </div>
      </div>
    </div>
  )
}
