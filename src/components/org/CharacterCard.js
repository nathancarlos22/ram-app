import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  /* Estilos do card */
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
  }
`;

const CharacterCard = ({ character, onClick }) => (
  <Card onClick={onClick}>
    <img src={character.image} alt={character.name} />
    <h2>{character.name}</h2>
    <p>Status: {character.status}</p>
  </Card>
);

export default CharacterCard;
