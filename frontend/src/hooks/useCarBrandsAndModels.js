import { useState, useEffect } from 'react';
import carBrandsAndModels from '../data/carBrandsAndModels.json';

const useCarBrandsAndModels = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [carModels, setCarModels] = useState([]);

  const carBrands = carBrandsAndModels.map(car => car.brand).sort();

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  useEffect(() => {
    const selectedBrandData = carBrandsAndModels.find(car => car.brand === selectedBrand);
    setCarModels(selectedBrandData ? selectedBrandData.models : []);
  }, [selectedBrand]); // Ten useEffect reaguje na każdą zmianę `selectedBrand`

  return {
    carBrands,
    selectedBrand,
    handleBrandChange,
    carModels
  };
};

export default useCarBrandsAndModels;
