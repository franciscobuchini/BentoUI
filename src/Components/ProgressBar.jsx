const ProgressBar = ({ PBn, PBd, PBh }) => {
  // Calcular el porcentaje completado
  const percentage = (PBn / PBd) * 100;

  return (
    <div className="ProgressBar">
      <div className="Text"> <h3>{PBh}</h3> </div>
      <div className="ProgressBar100">
        <div className="ProgressBarX" style={{ width: `${percentage}%`}}></div>
      </div>
    </div>
  )
}

export default ProgressBar;