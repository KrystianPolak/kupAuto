import React, { useState } from 'react';
import LoupeIcon from '../assets/images/loupe-svgrepo-com.svg'; 
import { carBrands, fuelTypes, drives, gearboxTypes, conditions, damages, bodyTypes } from './Announcments';
// import Announcments from './Announcments'; 
import Announcments, { advertisements } from './Announcments';


const Search = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'car-brands') setSelectedBrand(value);
    if (name === 'fuel-type') setSelectedFuelType(value);
    if (name === 'body-type') setSelectedBodyType(value);
  };

  console.log("Selected Brand:", selectedBrand);
  console.log("Selected Fuel Type:", selectedFuelType);
  console.log("Selected Body Type:", selectedBodyType);

  const filteredCars = advertisements.filter((car) => {
    return (
      (selectedBrand === '' || car.brand === selectedBrand) &&
      (selectedFuelType === '' || car.fuelType === selectedFuelType) &&
      (selectedBodyType === '' || car.bodyType === selectedBodyType)
    );
  });
  return (
    <>
     <section className="search-section">
         <div className="browser-div">
             <img className="loupe" src={LoupeIcon} alt="Szukaj"/>
             <input placeholder="Wpisz markę, model" className="browser" type="text"/>
         </div>
         <form className="search" action="">
             <select className="search__select" name="car-brands" id="searchBrand" onChange={handleFilterChange}>
                 <option value="">Marka</option>
                 {Object.keys(carBrands).map((key) => (
                   <option key={key} value={carBrands[key]}>
                     {carBrands[key]}
                   </option>
                 ))}
             </select> 
                  
             <select className="search__select" name="car-models" id="">
                 <option value="">Model</option>

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
                  
             <select className="search__select" name="fuel-type" id="searchFuelType">
                 <option value="">Rodzaj paliwa</option>
                 {Object.keys(fuelTypes).map((key) => (
                   <option key={key} value={fuelTypes[key]}>
                     {fuelTypes[key]}
                   </option>
                 ))}
             </select>
     
             <select className="search__select" name="gearbox-type" id="">
                 <option value="">Rodzaj skrzyni biegów</option>
                 {Object.keys(gearboxTypes).map((key) => (
                   <option key={key} value={gearboxTypes[key]}>
                     {gearboxTypes[key]}
                   </option>
                 ))}
             </select>
     
             <select className="search__select" name="drive-type" id="">
                 <option value="">Napęd</option>
                 {Object.keys(drives).map((key) => (
                   <option key={key} value={drives[key]}>
                     {drives[key]}
                   </option>
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
                 {Object.keys(conditions).map((key) => (
                   <option key={key} value={conditions[key]}>
                     {conditions[key]}
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