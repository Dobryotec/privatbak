import axios from 'axios';

export const fetchUserInfo = async ({ latitude, longitude }) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;
  const { data } = await axios.get(urlPosition);
  console.log(data.results[0].annotations.currency.iso_code);
  return data.results[0].annotations.currency.iso_code;
};