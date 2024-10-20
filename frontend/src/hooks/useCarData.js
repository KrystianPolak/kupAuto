import { useState } from 'react';
import carData from '../data/carData.json'

const useCarData = () => {

const [selectedFuelTypes, setSelectedFuelTypes] = useState('');
const [selectedGearBoxes, setSelectedGearBoxes] = useState('');
const [selectedDrives, setSelectedDrives] = useState('');
const [selectedCondition, setSelectedCondition] = useState('');
const [selectedDamages, setSelectedDamages] = useState('');
const [selectedBodyTypes, setSelectedBodyTypes] = useState('');


const fuelTypes = Object.entries(carData.fuelTypes); 
const gearBoxes = Object.entries(carData.gearboxTypes);
const drives = Object.entries(carData.drives);
const condition = Object.entries(carData.conditions);
const damages = Object.entries(carData.damages);
const bodyTypes = Object.entries(carData.bodyTypes);



const setSelectedValue = (type, value) => {
    const setters = {
      fuelTypes: setSelectedFuelTypes,
      gearBoxes: setSelectedGearBoxes,
      drives: setSelectedDrives,
      conditions: setSelectedCondition,
      damages: setSelectedDamages,
      bodyTypes: setSelectedBodyTypes,
    };
  
   
    if (setters[type]) {
      setters[type](value); 
    } else {
      console.warn(`Nieznany typ: ${type}`);
    }
  };

  return {
    selectedFuelTypes,
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
    setSelectedValue
  };

};
export default useCarData;

