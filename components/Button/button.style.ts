import styled from 'styled-components';

interface IProps {
  bgColor?: string;
  fontSize?: string;
  padding?: string;
}

export const BtnWrap = styled.button<IProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 0.5rem;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  width: max-content;
  height: min-content;
  padding: ${({ padding }) => (padding ? padding : '.5rem 1rem')};
  color: white;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#355fe3')};
  border-radius: 8px;
  box-shadow: 0px 3px 6px #00000029;
  transition: transform 0.2s linear;
  cursor: pointer;
  user-select: none;
  :hover {
    z-index: 1.05;
    transform: scale(1.05);
  }
`;
