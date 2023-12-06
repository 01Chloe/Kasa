import ArrowBack from "../assests/arrow_back.png"

export default function Collapse({ title, content, isOpen, onToggle }) {
  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <p>{title}</p>
        <img
          src={ArrowBack}
          alt="Voir plus de détails"
          className={`arrow-back ${isOpen ? "arrow-top" : ""}`}
          onClick={onToggle}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "collapse-visible" : ""}`}>
        {content}
      </div>
    </div>
  )
}
