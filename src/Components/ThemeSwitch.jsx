import React, { useState, useEffect } from "react";

export default function ThemeSwitch({ onChange }) {
  const [isChecked, setIsChecked] = useState(() => {
    return document.documentElement.getAttribute("data-theme") === "dark";
  });

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setIsChecked(currentTheme === "dark");
  }, []);

  const handleThemeSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState); // Toggle the theme state

    if (newCheckedState) {
      // Change to dark theme
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      // Change to light theme
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <label className="Switch ThemeSwitch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleThemeSwitch}
      />
    </label>
  );
}
