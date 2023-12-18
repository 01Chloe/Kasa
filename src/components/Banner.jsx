import "../styles/banner.scss"

export default function Banner({ bannerDatas }) {
  return (
    <div className="banner">
      <img
        src={bannerDatas.image}
        alt={bannerDatas.alt}
        className="banner-img"
      />
      {bannerDatas.title}
    </div>
  )
}
