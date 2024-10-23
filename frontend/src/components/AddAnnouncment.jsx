import React, { useState } from 'react';
import { Grid, TextField, Button, MenuItem, Container, Typography } from '@mui/material';
import Dropzone from './Dropzone/Dropzone';
import useCarData from '../hooks/useCarData';
import Textarea from '@mui/joy/Textarea';
import useCarBrandsAndModels from '../hooks/useCarBrandsAndModels';
import LocationSearch from './LocationSearch/LocationSearch';


const AddAnnouncement = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    price: '',
    mileage: '',
    yearFrom: '',
    yearTo: '',
    engineCapacity: '',
    horsePower: '',
    fuelType: '',
    gearbox: '',
    drive: '',
    bodyType: '',
    condition: '',
    damage: '',
    location: ''
  });

  

  const { carBrands, selectedBrand, handleBrandChange, carModels } = useCarBrandsAndModels();

  const {
    fuelTypes,
    gearBoxes,
    drives,
    condition,
    damages,
    bodyTypes,
    setSelectedValue} = useCarData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const test = (e) => {
    handleBrandChange(e.target.value); 
    handleInputChange(e); 
  };
  



  return (
    <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', padding: '16px', }}>
        Dodaj ogłoszenie
        </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}
        sx={{
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            py: '10px', 
          }}
        >
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Marka"
              name="brand"
              fullWidth
              value={formData.brand}
              onChange={(e) => {
                test(e); 
              }}            >
              {carBrands.map((brand, index) => (
              <MenuItem key={index} value={brand}> 
                {brand} 
              </MenuItem>
            ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Model"
              name="model"
              fullWidth
              value={formData.model}
              onChange={handleInputChange}>
              {carModels.map((models, index) => (
                <MenuItem key={index} value={models}> 
                  {models} 
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Cena"
              name="price"
              type="number"
              fullWidth
              value={formData.price}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Przebieg"
              name="mileage"
              type="number"
              fullWidth
              value={formData.mileage}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Rok produkcji"
              name="year"
              type="number"
              fullWidth
              value={formData.yearTo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Pojemność"
              name="engineCapacity"
              type="number"
              fullWidth
              value={formData.engineCapacity}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Moc (KM)"
              name="horsePower"
              type="number"
              fullWidth
              value={formData.horsePower}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Rodzaj paliwa"
              name="fuelType"
              fullWidth
              value={formData.fuelType}
              onChange={handleInputChange}
            >
            {fuelTypes.map(([key, value]) => (
              <MenuItem key={key} value={value}> 
                {value} 
              </MenuItem>
            ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Rodzaj skrzyni biegów"
              name="gearbox"
              fullWidth
              value={formData.gearbox}
              onChange={handleInputChange}
            >
              {gearBoxes.map(([key, value]) => (
              <MenuItem key={key} value={value}> 
                {value} 
              </MenuItem>
            ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Napęd"
              name="drive"
              fullWidth
              value={formData.drive}
              onChange={handleInputChange}
            >
              {drives.map(([key, value]) => (
              <MenuItem key={key} value={value}> 
                {value} 
              </MenuItem>
            ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Typ nadwozia"
              name="bodyType"
              fullWidth
              value={formData.bodyType}
              onChange={handleInputChange}
            >
               {bodyTypes.map(([key, value]) => (
              <MenuItem key={key} value={value}> 
                {value} 
              </MenuItem>
            ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Stan pojazdu"
              name="condition"
              fullWidth
              value={formData.condition}
              onChange={handleInputChange}
            >
               {condition.map(([key, value]) => (
              <MenuItem key={key} value={value}> 
                {value} 
              </MenuItem>
            ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Stan uszkodzeń"
              name="damage"
              fullWidth
              value={formData.damage}
              onChange={handleInputChange}
            >
               {damages.map(([key, value]) => (
              <MenuItem key={key} value={value}> 
                {value} 
              </MenuItem>
            ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <LocationSearch></LocationSearch>
          </Grid>
          <Grid item xs={12} sm={6} md={10}>
            <Textarea
              placeholder="Opis"
              name="description"
              fullWidth
              minRows={4} 
              value={formData.description}
              onChange={handleInputChange}
            />
        </Grid>
        <Grid item xs={12} sm={6} md={10}>
        <Dropzone></Dropzone>
        </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{padding: '16px', marginBottom: '10px'}}>
              Dodaj
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddAnnouncement;
