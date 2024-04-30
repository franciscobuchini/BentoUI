import React, { useState, useEffect } from 'react';

export default function ThemeSwitch({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Update the switch state to match the current theme
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  const handleSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState); // Toggle the theme state

    if (!isChecked) {
      // Change to dark theme
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // Change to light theme
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <label className="Switch">
      <input type="checkbox" checked={isChecked} onChange={handleSwitch} />
    </label>
  );
}
