import { useState } from "react";
import "../css/filter.css";

const DropdownFilter = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleClear = () => {
    setSelected(null);
  };

  return (
    <div className='dropdown'>
      <button
        className={`dropdown__button ${open ? "dropdown__button--open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className='dropdown__arrow'>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className='filter'>
          {options.map((opt) => (
            <label key={opt} className='filter__option'>
              <input
                type='radio'
                name={title}
                value={opt}
                checked={selected === opt}
                onChange={() => handleSelect(opt)}
              />
              {opt} minutes
            </label>
          ))}
          <button className='filter__clear' onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

const FilterPanel = () => {
  const prepOptions = [0, 5, 10];
  const cookOptions = [0, 5, 10, 15, 20];

  return (
    <div className='filters'>
      <DropdownFilter title='Max Prep Time' options={prepOptions} />
      <DropdownFilter title='Max Cook Time' options={cookOptions} />
    </div>
  );
};

export default FilterPanel;
