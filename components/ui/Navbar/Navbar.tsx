import Image from 'next/image';
import Link from 'next/link';
import * as SC from './Navbar.styles';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Navbar = () => {
  return (
    <SC.NavContainer>
      <div className='flex'>
        <Image src='/assets/100.svg' height={30} width={30} alt='PokeLogo' />
        <Link href='/dashboard' data-testid='dashboard-link'>
          <span className='text-3xl font-bold ml-2'>P</span>
          <span className='text-lg mt-2'>okeMonoma</span>
        </Link>
      </div>
      <DropdownMenu />
    </SC.NavContainer>
  );
};
