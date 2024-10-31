import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

// Função para buscar personagens com paginação
export const getCharacters = async (page = 1) => {
  try {
    const response = await api.get(`/character?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para buscar episódios com base em uma lista de IDs
export const getEpisodes = async (ids) => {
  try {
    const response = await api.get(`/episode/${ids}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
