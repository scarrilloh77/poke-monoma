import React from 'react';
import * as SC from './Paginate.styles';

interface Paginate {
  pokemonsPerPage: number;
  totalPokemons: number;
  currentPage: number;
  previousPage: () => void;
  nextPage: () => void;
}

const Paginate = ({
  pokemonsPerPage,
  totalPokemons,
  currentPage,
  previousPage,
  nextPage,
}: Paginate) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <SC.PaginationContainer className='pagination-container'>
      <ul className='pagination'>
        <SC.ItemPaginationContainer
          onClick={previousPage}
          data-testid='paginate-prev'
        >
          Prev
        </SC.ItemPaginationContainer>
        {pageNumbers.map((number) => {
          return (
            <SC.ItemPaginationContainer
              key={number}
              active={currentPage === number ? 'true' : 'false'}
              staticfunc='true'
            >
              {number}
            </SC.ItemPaginationContainer>
          );
        })}
        <SC.ItemPaginationContainer
          onClick={nextPage}
          data-testid='paginate-next'
        >
          Next
        </SC.ItemPaginationContainer>
      </ul>
    </SC.PaginationContainer>
  );
};

export default Paginate;
