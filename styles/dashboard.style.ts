import styled from 'styled-components';

export const PokemonList = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(275px, 300px));
  gap: 30px;
  padding: 20px 0px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: white;
`;
