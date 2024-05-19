import React from "react";

export default function LanguageSwitch({ onChange, checked }) {
  const handleLangSwitch = (event) => {
    onChange(event.target.checked);
  };

  return (
    <label className="Switch LanguageSwitch">
      <input type="checkbox" checked={checked} onChange={handleLangSwitch} />
    </label>
  );
}
