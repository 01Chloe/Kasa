import AboutBannerImg from "../assests/a-propos_img.png"
import "../styles/about.scss"

export default function About() {
  return (
    <>
      <div className="about-banner">
        <img
          src={AboutBannerImg}
          alt="Paysage de montagnes"
          className="about-banner-img"
        />
        <div className="about-banner-overlay"></div>
      </div>
    </>
  )
}
