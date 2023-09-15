import Image from 'next/image';
import Link from 'next/link';
import * as SC from './Navbar.styles';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Navbar = () => {
  return (
    <SC.NavContainer>
      <div className='flex'>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
          alt='poke-icon'
          width={30}
          height={30}
        />
        <Link href='/dashboard' data-testid='dashboard-link'>
          <span className='text-3xl font-bold ml-2'>P</span>
          <span className='text-lg mt-2'>okeMonoma</span>
        </Link>
      </div>
      <DropdownMenu />
    </SC.NavContainer>
  );
};
