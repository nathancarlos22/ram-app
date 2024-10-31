import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';
import CharacterCard from '../components/org/CharacterCard';
import CharacterDetails from './CharacterDetails';
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
    const fetchAllCharacters = async () => {
      try {
        let page = 1;
        let allCharacters = [];
        let response;

        // Enquanto houver próxima página, continue buscando personagens
        do {
          response = await getCharacters(page);
          allCharacters = allCharacters.concat(response.results);
          page += 1;
        } while (response.info.next);

        setCharacters(allCharacters);
      } catch (error) {
        setError('Erro ao carregar personagens.');
      }
    };

    fetchAllCharacters();
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

      {selectedCharacter && (
        <CharacterDetails
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </>
  );
};

export default Home;
