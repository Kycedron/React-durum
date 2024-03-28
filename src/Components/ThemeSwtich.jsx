import React from 'react';


const ThemeSwitch = ({ theme, toggleTheme }) => {
  return (
    <div className="controls">
      <label htmlFor="theme-switch" className="theme-switch-label">
        <input
          type="checkbox"
          id="theme-switch"
          className="theme-switch-input"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className="theme-switch-slider">
          <div className="theme-switch-handle" />
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
