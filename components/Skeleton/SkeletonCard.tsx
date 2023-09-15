import React from 'react';
import * as SC from './SkeletonCard.styles';

const SkeletonCard = () => {
  return (
    <SC.CardContainer>
      <SC.SkeletonVisual>
        <SC.SkeletonImage />
        <div className='flex justify-end w-full'>
          <SC.SkeletonWeight />
        </div>
      </SC.SkeletonVisual>
      <SC.SkeletonInfo>
        <SC.SkeletonTitle />
        <SC.SkeletonMoves />
      </SC.SkeletonInfo>
    </SC.CardContainer>
  );
};

export default SkeletonCard;
