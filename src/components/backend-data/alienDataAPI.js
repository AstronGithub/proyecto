import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Updated to match the backend port

export const getAlienNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/alien-news`); // Updated route
    return response.data;
  } catch (error) {
    console.error(`Error fetching alien news: ${error}`);
  }
};

export const getAlienEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/alien-events`); // Updated route
    return response.data;
  } catch (error) {
    console.error(`Error fetching alien events: ${error}`);
  }
};

export const getAlienRaces = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/alien-races`); // Updated route
    return response.data;
  } catch (error) {
    console.error(`Error fetching alien races: ${error}`);
  }
};
