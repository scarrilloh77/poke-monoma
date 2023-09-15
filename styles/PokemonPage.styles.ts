import styled from 'styled-components';
import { device } from '@/utils';

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #101217;
`;

export const DetailVisualContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #212530;
  border-radius: 20px;
  @media ${device.mobileS} {
    flex-direction: column;
    max-width: 600px;
  }
  @media ${device.laptopL} {
    flex-direction: row;
    min-height: 700px;
    max-width: 70%;
  }
`;

export const DetailImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 275px;
  @media ${device.tablet} {
    height: 325px;
  }
  @media ${device.laptopL} {
    height: 700px;
  }
`;

export const Image = styled.img`
  width: 50%;
  @media ${device.laptopL} {
    width: 70%;
  }
`;

export const DetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px;
  gap: 15px;
  width: 100%;
  color: white;
  background-color: #2c313f;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @media ${device.laptopL} {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 20px;
  }
`;

export const DetailNameContainer = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  @media ${device.mobileM} {
    font-size: 2.19rem;
  }
`;

export const MediumSubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const SmallSubTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const SmallPropertyContainer = styled.div`
  display: flex;
  gap: 3px;
`;

export const MediumPropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    div {
      background-color: #212530;
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
`;
