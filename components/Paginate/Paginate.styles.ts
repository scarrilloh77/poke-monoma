import styled from 'styled-components';

interface Props {
  active?: string;
  staticfunc?: string;
}

export const PaginationContainer = styled.div<Props>`
  display: flex;
  ul {
    display: flex;
    gap: 10px;
    user-select: none;
  }
`;

export const ItemPaginationContainer = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active, staticfunc }) =>
    active === 'true'
      ? '#1B1F29'
      : staticfunc === 'true'
      ? 'transparent'
      : '#2c313f'};
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  user-select: none;
  &:hover {
    background-color: ${({ staticfunc }) =>
      staticfunc === 'true' ? 'transparent' : '#1b1f29'};
  }
`;
