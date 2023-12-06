import { useState } from "react"
import Collapse from "./Collapse"
import "../styles/collapseAppartment.scss"

export default function CollapseAppartment({ appartment }) {
  const [collapseState, setCollapseState] = useState({
    description: false,
    equipment: false,
  })

  const collapseToggle = (collapseKey) => {
    setCollapseState({
      ...collapseState,
      [collapseKey]: !collapseState[collapseKey],
    })
  }

  return (
    <div className="appartment-collapses-container">
      <Collapse
        title="Description"
        content={
          <p className="collapse-content-parag">{appartment.description}</p>
        }
        isOpen={collapseState.description}
        onToggle={() => collapseToggle("description")}
      />
      <Collapse
        title="Équipements"
        content={appartment.equipments.map((equipment, index) => (
          <p key={index} className="collapse-content-parag">
            {equipment}
          </p>
        ))}
        isOpen={collapseState.equipment}
        onToggle={() => collapseToggle("equipment")}
      />
    </div>
  )
}
