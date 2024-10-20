import React, { useState } from 'react';
import LoupeIcon from '../assets/images/loupe-svgrepo-com.svg'; 
// import { fuelTypes, drives, gearboxTypes, conditions, damages, bodyTypes } from './Announcments';
// import Announcments from './Announcments'; 
import Announcments, { advertisements } from './Announcments';
// import carBrandsAndModels from '../data/carBrandsAndModels.json'
import useCarBrandsAndModels from '../hooks/useCarBrandsAndModels';
import useCarData from '../hooks/useCarData';
import MultiSelectCheckbox from './MultiSelectCheckbox/MultiSelectCheckbox';




const Search = () => {
  // const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const { carBrands, selectedBrand, handleBrandChange, carModels } = useCarBrandsAndModels();
  const {selectedFuelTypes,
    selectedGearBoxes,
    selectedDrives,
    selectedCondition,
    selectedDamages,
    selectedBodyTypes,
    fuelTypes,
    gearBoxes,
    drives,
    condition,
    damages,
    bodyTypes,
    setSelectedValue} = useCarData();

  const getSelect = (handle) => (e) => handle(e.target.value);


  const filteredCars = advertisements.filter((car) => {
    return (
      (selectedBrand === '' || car.brand === selectedBrand) &&
      (selectedFuelTypes.length === 0 || selectedFuelTypes.includes(car.fuelType.toLowerCase())) &&
      (selectedBodyTypes === '' || car.bodyType === selectedBodyTypes)
    );
  });

  console.log(selectedFuelTypes);
  
  return (
    <>
     <section className="search-section">
         <div className="browser-div">
             <img className="loupe" src={LoupeIcon} alt="Szukaj"/>
             <input placeholder="Wpisz markę, model" className="browser" type="text"/>
         </div>
         <form className="search" action="">
            <MultiSelectCheckbox 
        options={fuelTypes} 
        placeholder={'rodzaj paliwa'}
        onChange={(selectedFuelTypes) => setSelectedValue('fuelTypes', selectedFuelTypes)}
        />
             <select className="search__select" name="car-brands" id="searchBrand" onChange={getSelect(handleBrandChange)}>
                 <option value="">Marka</option>
                 {carBrands.map((brand, index) => (
                    <option key={index} value={brand}>{brand}</option>
                  ))}
             </select> 
                  
             <select className="search__select" name="car-models" id="">
                 <option value="">Model</option>
                 {carModels.map((models, index) => (
                    <option key={index} value={models}>{models}</option>
                  ))}
             </select>
     
             <input type="text" className="search__select" placeholder="Cena od" name="price-from"/>
                  
             <input type="text" className="search__select" placeholder="Cena do" name="price-to"/>
                  
             <input type="text" className="search__select" placeholder="Przebieg od" name="mileage-from"/>

             <input type="text" className="search__select" placeholder="Przebieg do" name="mileage-to"/>

             <input type="text" className="search__select" placeholder="Rok produkcji od" name="year-from"/>

             <input type="text" className="search__select" placeholder="Rok produkcji do" name="year-to"/>
     
             <input type="text" className="search__select" placeholder="Pojemność od" name="engine-capacity-from"/>
     
             <input type="text" className="search__select" placeholder="Pojemność do" name="engine-capacity-to"/>
     
             <input type="text" className="search__select" placeholder="Moc (KM) od" name="power-from"/>
     
             <input type="text" className="search__select" placeholder="Moc (KM) do" name="power-to"/>
                  
             <select className="search__select" name="fuel-type" id="searchFuelType" onChange={(e) => setSelectedValue('fuelTypes', e.target.value)}>
                 <option value="">Rodzaj paliwa</option>
                 {fuelTypes.map(([key, value]) => (
                    <option key={key} value={value}>{value}</option>
                  ))}
             </select>
     
             <select className="search__select" name="gearbox-type" id="" onChange={(e) => setSelectedValue('gearBoxes', e.target.value)}>
                 <option value="">Rodzaj skrzyni biegów</option>
                 {gearBoxes.map(([key, value]) => (
                    <option key={key} value={value}>{value}</option>
                  ))}
             </select>
     
             <select className="search__select" name="drive-type" id="" onChange={(e) => setSelectedValue('drives', e.target.value)}>
                 <option value="" disabled hidden>Napęd</option>
                 {drives.map(([key, value]) => (
                    <option key={key} value={value}>{value}</option>
                  ))}
             </select>
                  
             <select className="search__select" name="body-type" id="">
                 <option value="">Typ nadwozia</option>
                 {Object.keys(bodyTypes).map((key) => (
                   <option key={key} value={bodyTypes[key]}>
                     {bodyTypes[key]}
                   </option>
                 ))}
             </select>
     
             <select className="search__select" name="condition" id="">
                 <option value="">Stan</option>
                 {Object.keys(condition).map((key) => (
                   <option key={key} value={condition[key]}>
                     {condition[key]}
                   </option>
                 ))}
             </select>
     
             <select className="search__select" name="damage" id="">
                 <option value="">Stan uszkodzeń</option>
                 {Object.keys(damages).map((key) => (
                   <option key={key} value={damages[key]}>
                     {damages[key]}
                   </option>
                 ))}
             </select>
                  
             <select
                 className="search__select"
                 name="location"
                 value={selectedLocation}
                 onChange={(e) => setSelectedLocation(e.target.value)}
             >
                 <option value="" disabled>Lokalizacja</option>
             </select>
             <button name="filter" className="search__button">Szukaj</button>
         </form>
     </section>
     <Announcments cars={filteredCars} />
    </>
  );
}

export default Search;