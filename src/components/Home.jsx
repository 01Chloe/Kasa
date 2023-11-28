import HomeBannerImg from "../assests/accueil-img.png"
import "../styles/home.scss"

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <img
          src={HomeBannerImg}
          alt="Océan et falaise"
          className="home-banner-img"
        />
        <div className="home-banner-overlay"></div>
        <h1 className="home-banner-title">
          Chez vous,&nbsp;
          <br className="home-title-break" />
          partout et ailleurs
        </h1>
      </div>
    </>
  )
}
