import React, { useState } from 'react';
import { Grid, TextField, Button, MenuItem, Container, Typography } from '@mui/material';
import { carBrands, fuelTypes, bodyTypes, gearboxTypes, drives, conditions, damages } from './Announcments';
import Dropzone from './Dropzone/Dropzone';

const AddAnnouncement = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    priceFrom: '',
    priceTo: '',
    mileageFrom: '',
    mileageTo: '',
    yearFrom: '',
    yearTo: '',
    engineCapacityFrom: '',
    engineCapacityTo: '',
    powerFrom: '',
    powerTo: '',
    fuelType: '',
    gearbox: '',
    drive: '',
    bodyType: '',
    condition: '',
    damage: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dodaj ogłoszenie:', formData);
  };
  

  return (
    <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', padding: '16px', }}>
        Dodaj ogłoszenie
        </Typography>
        <Dropzone></Dropzone>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}
        sx={{
            display: 'flex',
            justifyContent: 'center', // Wycentrowanie w poziomie
            alignItems: 'center',
            py: '10px', // Wycentrowanie w pionie
          }}
        >
          {/* Marka */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Marka"
              name="brand"
              fullWidth
              value={formData.brand}
              onChange={handleInputChange}
            >
              {Object.keys(carBrands).map((key) => (
                <MenuItem key={key} value={carBrands[key]}>
                  {carBrands[key]}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Model */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Model"
              name="model"
              fullWidth
              value={formData.model}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Cena od */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Cena"
              name="price"
              type="number"
              fullWidth
              value={formData.priceFrom}
              onChange={handleInputChange}
            />
          </Grid>


          {/* Przebieg od */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Przebieg"
              name="mileage"
              type="number"
              fullWidth
              value={formData.mileageFrom}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Rok produkcji do */}
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
              value={formData.engineCapacityTo}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Moc do */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Moc (KM)"
              name="horsePower"
              type="number"
              fullWidth
              value={formData.powerTo}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Rodzaj paliwa */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Rodzaj paliwa"
              name="fuelType"
              fullWidth
              value={formData.fuelType}
              onChange={handleInputChange}
            >
              {Object.keys(fuelTypes).map((key) => (
                <MenuItem key={key} value={fuelTypes[key]}>
                  {fuelTypes[key]}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Rodzaj skrzyni biegów */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Rodzaj skrzyni biegów"
              name="gearbox"
              fullWidth
              value={formData.gearbox}
              onChange={handleInputChange}
            >
              {Object.keys(gearboxTypes).map((key) => (
                <MenuItem key={key} value={gearboxTypes[key]}>
                  {gearboxTypes[key]}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Napęd */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Napęd"
              name="drive"
              fullWidth
              value={formData.drive}
              onChange={handleInputChange}
            >
              {Object.keys(drives).map((key) => (
                <MenuItem key={key} value={drives[key]}>
                  {drives[key]}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Typ nadwozia */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Typ nadwozia"
              name="bodyType"
              fullWidth
              value={formData.bodyType}
              onChange={handleInputChange}
            >
              {Object.keys(bodyTypes).map((key) => (
                <MenuItem key={key} value={bodyTypes[key]}>
                  {bodyTypes[key]}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Stan pojazdu */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Stan pojazdu"
              name="condition"
              fullWidth
              value={formData.condition}
              onChange={handleInputChange}
            >
              {Object.keys(conditions).map((key) => (
                <MenuItem key={key} value={conditions[key]}>
                  {conditions[key]}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Stan uszkodzeń */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              select
              label="Stan uszkodzeń"
              name="damage"
              fullWidth
              value={formData.damage}
              onChange={handleInputChange}
            >
              {Object.keys(damages).map((key) => (
                <MenuItem key={key} value={damages[key]}>
                  {damages[key]}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Lokalizacja */}
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Lokalizacja"
              name="location"
              fullWidth
              value={formData.location}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Przycisk */}
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
