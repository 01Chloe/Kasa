import Carousel from "../components/Carousel"
import AppartmentDetail from "../components/AppartmentDetail"
import CollapseAppartment from "../components/CollapseAppartment"
import { Navigate, useParams } from "react-router-dom"
import { appartmentsList } from "../datas/data"

export default function AppartmentPage() {
  const { id } = useParams()
  let cleanId = id.substring(1)
  const appartment = appartmentsList.find((appart) => appart.id === cleanId)

  if (!appartment) {
    return <Navigate to="/erreur" />
  }
  return (
    <>
      <Carousel appartment={appartment} />
      <AppartmentDetail appartment={appartment} />
      <CollapseAppartment appartment={appartment} />
    </>
  )
}
