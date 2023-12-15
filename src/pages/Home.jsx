import { useFetchData } from "../hookCustom/useFetchData"
import Banner from "../components/Banner"
import AppartmentCard from "../components/AppartmentCard"
import "../styles/home.scss"

export default function Home() {
  const appartmentsList = useFetchData("/data.json")

  return (
    <main>
      <Banner isHome={true} />
      <div className="home-content">
        {appartmentsList.map((item) => (
          <AppartmentCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}
