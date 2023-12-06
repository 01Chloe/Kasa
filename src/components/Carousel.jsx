import arrowLeft from "../assests/arrow_left.svg"
import arrowRight from "../assests/arrow_right.svg"
import "../styles/carousel.scss"
import { useState } from "react"

export default function Carousel({ appartment }) {
  const [count, setCount] = useState(0)
  const [slideAnimation, setSlideAnimation] = useState(false)
  const totalImages = appartment.pictures.length

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount === 0 ? totalImages - 1 : prevCount - 1))
    setSlideAnimation(!slideAnimation)
    setTimeout(() => {
      setSlideAnimation(false)
    }, 300)
  }

  const increaseCount = () => {
    setCount((prevCount) => (prevCount === totalImages - 1 ? 0 : prevCount + 1))
    setSlideAnimation(!slideAnimation)
    setTimeout(() => {
      setSlideAnimation(false)
    }, 300)
  }

  return (
    <div className="carousel-content">
      <div className={`images-container ${slideAnimation ? "slide-anim" : ""}`}>
        <img
          src={appartment.pictures[count]}
          alt="Photos de l'appartement"
          className="appart-detail-img"
        />
        <p className={totalImages <= 1 ? "hidden" : "image-counter"}>
          {count + 1}/{totalImages}
        </p>
      </div>
      <img
        src={arrowLeft}
        alt="Défilement vers la gauche"
        className={totalImages <= 1 ? "hidden" : "arrow arrow-left"}
        onClick={decreaseCount}
      />
      <img
        src={arrowRight}
        alt="Défilement vers la droite"
        className={totalImages <= 1 ? "hidden" : "arrow arrow-right"}
        onClick={increaseCount}
      />
    </div>
  )
}
