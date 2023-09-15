import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-color: hsl(200, 10%, 30%);
  }
  100% {
    background-color: hsl(200, 10%, 40%);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  gap: 10px;
  background-color: #212530;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

export const SkeletonVisual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  gap: 5px;
  border: 0px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const SkeletonImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  animation: ${shimmer} 1s linear infinite alternate;
`;

export const SkeletonWeight = styled.div`
  justify-self: flex-end;
  width: 80px;
  height: 25px;
  animation: ${shimmer} 1s linear infinite alternate;
  border-radius: 50px;
`;

export const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 18px;
  color: white;
  background-color: #2c313f;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const SkeletonTitle = styled.div`
  width: 130px;
  height: 30px;
  background-size: 200% 100%;
  animation: ${shimmer} 1s linear infinite alternate;
  border-radius: 50px;
`;

export const SkeletonMoves = styled.div`
  width: 180px;
  height: 30px;
  animation: ${shimmer} 1s linear infinite alternate;
  border-radius: 50px;
`;
