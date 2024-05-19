import React, { useState } from "react";

export default function Button({ Lurl, Bt }) {
  // Estado local para controlar el texto del botón
  const [buttonText, setButtonText] = useState("➜");

  // Función para cambiar el texto cuando se hace hover
  const handleMouseEnter = () => {
    setButtonText(Bt);
  };

  // Función para abrir el enlace en una nueva pestaña
  const handleButtonClick = () => {
    if (Lurl) {
      window.open(Lurl, "_blank");
    }
  };

  return (
    <a className="Button" onClick={handleButtonClick} onMouseEnter={handleMouseEnter} onMouseLeave={() => setButtonText("➜")}>
      {buttonText}
    </a>
  );
}