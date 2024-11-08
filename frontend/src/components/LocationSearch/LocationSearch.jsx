import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { fetchLocation } from '../../api/googleMapsApi';

const LocationSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleInputChange = async (event, newInputValue) => {
    setInputValue(newInputValue);

    if (newInputValue.length > 2) {
      const response = await fetchLocation(newInputValue);
      const predictions = response.predictions.map((prediction) => ({
        label: prediction.description,
        region: prediction.voidship, 
      }));
      setOptions(predictions);
    }
  };

  return (
    <Autocomplete
      id="location-search"
      options={options}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <li {...props}>
          <LocationOnIcon style={{ marginRight: '10px' }} />
          <div>
            <span>{option.label}</span>
            <br />
            <small>{option.region}</small> 
          </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Lokalizacja"
          variant="outlined"
          onChange={(event) => handleInputChange(event, event.target.value)}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <LocationOnIcon style={{ marginRight: '8px' }} />
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default LocationSearch;
