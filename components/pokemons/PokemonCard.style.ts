import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  gap: 10px;
  background-color: #212530;
`;

export const PokeVisual = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
  gap: 5px;
  border: 0px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;
export const PokeImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Image = styled.img`
  height: 160px;
  transition: ease-in-out 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

export const PokeWeight = styled.div`
  display: flex;
  color: white;
  background-color: #2c313f;
  border-radius: 50px;
  font-size: 0.85rem;
  width: min-content;
  white-space: nowrap;
  padding: 3px 20px;
  box-sizing: border-box;
`;

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 15px;
  color: white;
  background-color: #2c313f;
  border: 0px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const PokeTitle = styled.span`
  font-size: 25px;
  font-weight: 500;
`;

export const PokeMoves = styled.div`
  display: flex;
  gap: 5px;
  color: #b3b3b3;
`;
