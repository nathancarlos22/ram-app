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

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  gap: 4px; 
`;

const PageNumber = styled.button`
  background: ${(props) => (props.active ? '#333' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(page);
        setCharacters(data.results);
        setTotalPages(data.info.pages); // Total de páginas obtido da API
      } catch (error) {
        setError('Erro ao carregar personagens.');
      }
    };

    fetchCharacters();
  }, [page]);

  if (error) {
    return <p>{error}</p>;
  }

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

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

      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <PageNumber
            key={index + 1}
            active={page === index + 1}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </PageNumber>
        ))}
      </Pagination>
    </>
  );
};

export default Home;
