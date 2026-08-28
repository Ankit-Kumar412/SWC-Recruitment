import React from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar({ value, onChange }) {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Search for meals (e.g., Arrabiata, Chicken...)"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <button className="clear-button" onClick={handleClear} aria-label="Clear search">
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
