import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = async () => {
  try {
    const response = await api.get('/character');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEpisodes = async (ids) => {
  try {
    const response = await api.get(`/episode/${ids}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
