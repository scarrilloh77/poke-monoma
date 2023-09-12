import styled from 'styled-components';
import { IoEye, IoEyeOff } from 'react-icons/io5';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #181c28;
`;

export const FormWrapper = styled.form`
  all: unset;
`;

export const InternWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: min-content;
  height: min-content;
  padding: 1rem;
  > span {
    font-size: 30px;
    font-weight: 300;
    color: white;
    user-select: none;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  height: 43px;
  > input[type='text'] {
    padding-right: 3rem;
  }
  > input[type='password'] {
    padding-right: 3rem;
  }
`;

export const Input = styled.input`
  all: unset;
  display: flex;
  flex-grow: 1;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 43px;
  padding: 0.5rem;
  font-size: 15px;
  border-radius: 4px;
  color: white;
  border-left: 10px #355fe3 solid;
  background-color: #282f3f;
  user-select: none;
`;

export const CloseEyeIcon = styled(IoEyeOff)`
  position: absolute;
  right: 15px;
  top: 12px;
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
`;

export const OpenEyeIcon = styled(IoEye)`
  position: absolute;
  right: 15px;
  top: 12px;
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
`;
