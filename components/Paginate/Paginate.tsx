import React from 'react';
import * as SC from './Paginate.styles';

interface Paginate {
  postsPerPage: number;
  totalPosts: number;
  paginate: (arg: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
}: Paginate) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <SC.PaginationContainer className='pagination-container'>
      <ul className='pagination'>
        <li onClick={previousPage} className='page-number'>
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className='page-number'
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className='page-number'>
          Next
        </li>
      </ul>
    </SC.PaginationContainer>
  );
};

export default Paginate;
