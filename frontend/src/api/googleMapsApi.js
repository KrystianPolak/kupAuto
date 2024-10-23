export const fetchLocation = async (query) => {
  const response = await fetch(`http://localhost:5000/api/googleMaps/places?query=${query}`);
  const data = await response.json();
  return data;
};