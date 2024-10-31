import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../services/api';
import styled from 'styled-components';

const Modal = styled.div`
  /* Estilos do modal */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  overflow: auto;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center; /* Centraliza o conteúdo de texto */
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 16px;
    border-radius: 4px;
  }

  h2, h3 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: #333;
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
`;

const CharacterDetails = ({ character, onClose }) => {
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const episodeIds = character.episode.map((ep) =>
          ep.split('/').pop()
        );
        const data = await getEpisodes(episodeIds);
        setEpisodes(Array.isArray(data) ? data : [data]);
      } catch (error) {
        setError('Erro ao carregar episódios.');
      }
    };

    fetchEpisodes();
  }, [character]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Modal>
      <Content>
        <button onClick={onClose}>Voltar</button>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <h3>Episódios:</h3>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>{episode.name}</li>
          ))}
        </ul>
      </Content>
    </Modal>
  );
};

export default CharacterDetails;
