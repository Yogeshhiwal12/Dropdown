import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown({ items }) {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function handleSelectOption() {
    setShowDropdown(false);
  }

  return (
    <div className="dropdown">
        <h3>Should You use a Dropdown?</h3>
      <button className="dropdown__button" onMouseEnter={toggleDropdown}>
        Select
      </button>
      <ul className={`dropdown__list ${showDropdown ? 'show' : ''}`} onMouseLeave={toggleDropdown}>
        {items.map((item) => (
          <li key={item} className="dropdown__option" onClick={handleSelectOption}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
