const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchVoidship(placeId, apiKey) {
    const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&language=pl&key=${apiKey}`);
    const geocodeData = await geocodeResponse.json();
    const voidship = geocodeData.results[0]?.address_components.find(component => 
      component.types.includes('administrative_area_level_1')
    );
    return voidship ? voidship.long_name : null;
  }

router.get('/places', async (req, res) => {
    const query = req.query.query; 
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; 
  
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&components=country:PL&language=pl&key=${apiKey}`);
        const data = await response.json();
        
        const predictionsWithVoidship = await Promise.all(data.predictions.map(async (prediction) => {
          const voidship = await fetchVoidship(prediction.place_id, apiKey);
          return {
            ...prediction,
            voidship: voidship || 'Brak informacji o województwie'
          };
        }));
        
        res.json({ predictions: predictionsWithVoidship });
      } catch (error) {
        console.error('Błąd podczas pobierania danych z Google Places API lub Geocoding API', error);
        res.status(500).json({ error: 'Błąd podczas pobierania danych z Google API' });
      }
    });

  module.exports = router;