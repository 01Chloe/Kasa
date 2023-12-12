import ArrowBack from "../assets/arrow_back.png"

export default function Collapse({ title, content, isOpen, onToggle }) {
  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <p>{title}</p>
        <button className="collapse-btn">
          <img
            src={ArrowBack}
            alt={isOpen ? "Voir moins" : "Voir plus de détails"}
            className={`arrow-back ${isOpen ? "arrow-top" : ""}`}
            onClick={onToggle}
          />
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? "collapse-visible" : ""}`}>
        {content}
      </div>
    </div>
  )
}
