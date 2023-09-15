import styled from 'styled-components';

export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 290px));
  max-width: 1600px;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
