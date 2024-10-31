import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';
import CharacterCard from '../components/org/CharacterCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;

  /* Responsividade */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.results);
      } catch (error) {
        setError('Erro ao carregar personagens.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Grid>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </Grid>

      
    </>
  );
};

export default Home;
