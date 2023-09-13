import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  ul {
    display: flex;
    gap: 10px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: gray;
      padding: 10px 20px;
      border-radius: 12px;
      background-color: #2c313f;
      cursor: pointer;
      transition: ease-in-out 0.2s;
      &:hover {
        background-color: #212530;
      }
    }
  }
`;
