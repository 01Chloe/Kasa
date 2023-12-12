import { useFetchData } from "../hookCustom/useFetchData"
import Gallery from "../components/Gallery"
import AppartmentDetail from "../components/AppartmentDetail"
import CollapseAppartment from "../components/CollapseAppartment"
import { Navigate, useParams } from "react-router-dom"

export default function AppartmentPage() {
  const appartmentsList = useFetchData("/data.json")

  const { id } = useParams()
  const appartment = appartmentsList.find((appart) => appart.id === id)

  if (!appartmentsList.length) {
    return
  }

  if (!appartment) {
    return <Navigate to="/erreur" />
  }
  return (
    <>
      <Gallery appartment={appartment} />
      <AppartmentDetail appartment={appartment} />
      <CollapseAppartment appartment={appartment} />
    </>
  )
}
