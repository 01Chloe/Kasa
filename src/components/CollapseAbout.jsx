import { useState } from "react"
import Collapse from "./Collapse"
import "../styles/collapseAbout.scss"

export default function CollapseAbout() {
  const [collapseState, setCollapseState] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  })

  const collapseToggle = (collapseKey) => {
    setCollapseState({
      ...collapseState,
      [collapseKey]: !collapseState[collapseKey],
    })
  }

  return (
    <div className="about-collapses-container">
      <Collapse
        title="Fiabilité"
        content={
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        }
        isOpen={collapseState.fiabilite}
        onToggle={() => collapseToggle("fiabilite")}
      />
      <Collapse
        title="Respect"
        content={
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        }
        isOpen={collapseState.respect}
        onToggle={() => collapseToggle("respect")}
      />
      <Collapse
        title="Service"
        content={
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        }
        isOpen={collapseState.service}
        onToggle={() => collapseToggle("service")}
      />
      <Collapse
        title="Sécurité"
        content={
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        }
        isOpen={collapseState.securite}
        onToggle={() => collapseToggle("securite")}
      />
    </div>
  )
}
