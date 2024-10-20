import { useState } from 'react';
import carBrandsAndModels from '../data/carBrandsAndModels.json';

const useCarBrandsAndModels = () => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const carBrands = carBrandsAndModels.map(car => car.brand).sort();
  
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const getModelsForSelectedBrand = () => {
    const selectedBrandData = carBrandsAndModels.find(car => car.brand === selectedBrand);
    return selectedBrandData ? selectedBrandData.models : [];
  };

  return {
    carBrands,
    selectedBrand,
    handleBrandChange,
    carModels: getModelsForSelectedBrand()
  };
};

export default useCarBrandsAndModels;