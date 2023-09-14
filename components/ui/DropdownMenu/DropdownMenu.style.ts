import styled from 'styled-components';

interface Props {
  active?: string;
}

export const MenuContainer = styled.div``;

export const MenuTrigger = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: #000;
    border-radius: 50%;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
  }
`;

export const DropdownMenuContainer = styled.div<Props>`
  position: absolute;
  top: 80px;
  right: 10px;
  padding: 10px 20px;
  width: 200px;
  background-color: #fff;
  border-radius: 8px;
  opacity: ${({ active }) => (active === 'true' ? 1 : 0)};
  visibility: ${({ active }) => (active === 'true' ? 'visible' : 'hidden')};
  transform: ${({ active }) =>
    active === 'true' ? 'translateY(0)' : 'translateY(-20px)'};
  transition: 250ms ease;
  ::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    background: #fff;
    transform: rotate(45deg);
  }
`;

export const LoginInfo = styled.h3`
  text-align: center;
  padding: 10px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2rem;
  color: #555;
  span {
    font-size: 14px;
    font-weight: 400;
    color: #cecece;
  }
`;

export const DropdownMenuItem = styled.li`
  display: flex;
  margin: 10px auto;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
  a {
    padding: 10px;
    width: 100%;
    height: 100%;
    transition: 250ms;
    color: black;
  }
`;
