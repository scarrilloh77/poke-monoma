import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: overlay;
  scroll-margin: 0.625rem;
  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(112, 112, 122, 0.5);
    border-radius: 0.625rem;
    border: 0.25rem solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0.625rem;
    margin-block: 0.5rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
