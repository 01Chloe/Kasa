import ArrowBack from "../assets/arrow_back.png"
import { useState } from "react"
import "../styles/collapse.scss"

export default function Collapse({ isAppartment, appartment = {} }) {
  const collapseAppartmentData = [
    {
      title: "Description",
      content: appartment.description,
      collapseKey: "description",
    },
    {
      title: "Équipements",
      content: appartment.equipments
        ? appartment.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))
        : [],
      collapseKey: "equipements",
    },
  ]

  const collapseAboutData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      collapseKey: "fiabilite",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      collapseKey: "respect",
    },
    {
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      collapseKey: "service",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      collapseKey: "securite",
    },
  ]

  const dataToUse = isAppartment ? collapseAppartmentData : collapseAboutData

  const [collapseState, setCollapseState] = useState(() => {
    const initialState = {}
    dataToUse.forEach((item) => {
      initialState[item.collapseKey] = false
    })
    return initialState
  })

  const collapseToggle = (collapseKey) => {
    setCollapseState({
      ...collapseState,
      [collapseKey]: !collapseState[collapseKey],
    })
  }

  const style = isAppartment ? "appartment" : "about"

  return (
    <div className={`collapses-container ${style}`}>
      {dataToUse.map((data, index) => (
        <div className="collapse-container" key={index}>
          <div className="collapse-title">
            <p>{data.title}</p>
            <button
              className="collapse-btn"
              onClick={() => collapseToggle(data.collapseKey)}
            >
              <img
                src={ArrowBack}
                alt={
                  collapseState[data.collapseKey]
                    ? "Voir moins"
                    : "Voir plus de détails"
                }
                className={`arrow-back ${
                  collapseState[data.collapseKey] ? "arrow-top" : ""
                }`}
              />
            </button>
          </div>
          <div
            className={`collapse-content ${
              collapseState[data.collapseKey] ? "collapse-visible" : ""
            }`}
          >
            {data.content}
          </div>
        </div>
      ))}
    </div>
  )
}
