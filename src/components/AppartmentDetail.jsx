import "../styles/appartmentDetail.scss"
import RatingPink from "../assets/rating-pink.jpg"
import RatingGrey from "../assets/rating-grey.jpg"

export default function AppartmentDetail({ appartment }) {
  if (!appartment) {
    return null
  }

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
          alt={i < coloredStars ? "étoile rose" : "étoile grise"}
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
        {appartment.title && (
          <h1 className="appartment-detail-title">{appartment.title}</h1>
        )}
        {appartment.location && (
          <p className="appartment-detail-location">{appartment.location}</p>
        )}
        {appartment.tags && (
          <ul className="appartment-detail-tags">
            {appartment.tags.map((tag, index) => (
              <li key={index} className="appartment-detail-tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="appartment-infos-secondary">
        {appartment.rating && (
          <div
            className="appartment-rating"
            aria-label={"Note de " + appartment.rating + "/5"}
          >
            {renderStars(appartment.rating)}
          </div>
        )}
        <div className="appartment-host">
          {appartment.host.name && (
            <p className="host-name">{appartment.host.name}</p>
          )}
          {appartment.host.picture && (
            <img
              src={appartment.host.picture}
              alt={altText}
              className="host-picture"
            />
          )}
        </div>
      </div>
    </div>
  )
}
