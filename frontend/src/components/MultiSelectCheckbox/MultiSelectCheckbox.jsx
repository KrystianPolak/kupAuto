import React, { useState } from 'react';
import './multi-select-checkbox.css'
import { Checkbox, FormControlLabel} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MultiSelectCheckbox = ({ options, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleCheckboxChange = (value) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues);  // Przekazanie nowych wartości do komponentu nadrzędnego
    };
 
  

  return (
    <div className="multi-select-checkbox">
      <div className="select-box" onClick={toggleDropdown}>
        <span>{placeholder}</span><ExpandMoreIcon></ExpandMoreIcon>
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          {options.map(([key, label]) => (
            <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={selectedValues.includes(key)}
                onChange={() => handleCheckboxChange(key)}
                sx={{
                    color: 'salmon', // Zmiana koloru w stanie nieaktywności
                    '&.Mui-checked': {
                      color: 'salmon', // Zmiana koloru, gdy checkbox jest zaznaczony
                    }
                  }}
              />
            }
            label={label}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectCheckbox;