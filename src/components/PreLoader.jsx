import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Title = styled.h1`
  animation: ${fadeOut} 1s ease-in-out forwards 2s;
`;

const PreLoader = ({ loading }) => {
  const name = useRef(null);

  useEffect(() => {
    if (name.current) {
      const typed = new Typed(name.current, {
        strings: ['rimu yamaura'],
        startDelay: 100,
        typeSpeed: 40,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      {loading && (
        <div className='w-screen h-screen flex justify-center items-center bg-base'>
          <Title className='text-base xl:text-2xl text-center flex'>
            <p ref={name}></p>
            <p className='text-warning pl-1'> portfolio</p>
          </Title>
        </div>
      )}
    </>
  );
};

export default PreLoader;
