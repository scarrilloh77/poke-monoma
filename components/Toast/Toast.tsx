import React from 'react';
import { Toaster } from 'react-hot-toast';

export const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          width: '500px',
          textAlign: 'center',
          background: '#282f3f',
          color: 'white',
          transition: 'all 0.1s ease-out',
        },
      }}
      position='top-center'
    />
  );
};
