import HomeBannerImg from "../assets/accueil-img.png"
import AboutBannerImg from "../assets/a-propos_img.png"
import "../styles/banner.scss"

export default function Banner({ isHome }) {
  return (
    <div className="banner">
      <img
        src={isHome ? HomeBannerImg : AboutBannerImg}
        alt={isHome ? "Océan et falaise" : "Paysage de montagnes"}
        className="banner-img"
      />
      {isHome && (
        <h1 className="banner-title">
          Chez vous,&nbsp;
          <br className="title-break" />
          partout et ailleurs
        </h1>
      )}
    </div>
  )
}
