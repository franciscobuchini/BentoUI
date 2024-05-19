import React, { useState } from "react";

export default function Download({ Lurl }) {

  const handleDownload = () => {
    if (Lurl) {
      const link = document.createElement("a")
      link.href = Lurl
      link.download = ""
      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link)
    }
  };

  return (
    <button className="Button Download" onClick={handleDownload}>
      <span style={{ transform: "rotate(90deg)"}}>➜I</span>
    </button>
  )
}