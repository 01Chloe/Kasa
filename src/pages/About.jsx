import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

export default function About() {
  return (
    <main>
      <Banner isHome={false} />
      <Collapse isAppartment={false} />
    </main>
  )
}
