import React, { useState, useEffect, useRef, useContext } from 'react';
import * as SC from './DropdownMenu.style';
import { AuthContext } from '@/context';

export const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const splitName = user?.name.split(' ')!;
  let menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <SC.MenuContainer ref={menuRef}>
      <SC.MenuTrigger
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div>
          {splitName[0].charAt(0).toUpperCase() +
            splitName[1].charAt(0).toUpperCase()}
        </div>
      </SC.MenuTrigger>

      <SC.DropdownMenuContainer active={open ? 'true' : 'false'}>
        <SC.LoginInfo>
          {user?.name}
          <br />
          <span>{user?.email}</span>
        </SC.LoginInfo>
        <ul>
          <SC.DropdownMenuItem>
            <a onClick={logout}> Logout </a>
          </SC.DropdownMenuItem>
        </ul>
      </SC.DropdownMenuContainer>
    </SC.MenuContainer>
  );
};
