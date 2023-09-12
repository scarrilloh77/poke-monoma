import Image from 'next/image';
import NextLink from 'next/link';
import * as SC from './Navbar.style';

export const Navbar = () => {
  return (
    <SC.NavContainer>
      <SC.LeftSection>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png'
          alt='poke-icon'
          width={60}
          height={60}
        />
        <span className='text-3xl font-bold ml-2'>P</span>
        <span className='text-lg mt-2'>okemons</span>
      </SC.LeftSection>
      <SC.RightSection>
        <NextLink href='/favorites' passHref>
          <div>Cerrar cesión</div>
        </NextLink>
      </SC.RightSection>
    </SC.NavContainer>
  );
};
