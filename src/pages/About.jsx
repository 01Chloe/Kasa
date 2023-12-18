import Banner from "../components/Banner"
import CollapseContainer from "../components/CollapseContainer"
import AboutBannerImg from "../assets/a-propos_img.png"

const aboutBannerDatas = {
  image: AboutBannerImg,
  alt: "Paysage de montagnes",
  title: <h1 className="banner-title about">À propos</h1>,
}

export default function About() {
  return (
    <main>
      <Banner bannerDatas={aboutBannerDatas} />
      <CollapseContainer pageType={"about"} />
    </main>
  )
}
