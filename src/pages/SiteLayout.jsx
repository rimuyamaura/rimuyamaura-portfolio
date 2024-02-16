import styled, { keyframes } from 'styled-components';
import { Outlet, useNavigation } from 'react-router-dom';
import {
  Navbar,
  Footer,
  Loading,
  SocialsBar,
  ThemeToggle,
} from '../components';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  // background-color: oklch(var(--bc));
`;

const Frame = styled.div`
  height: calc(100vh - 50px);
  width: calc(100vw - 50px);
  background-color: oklch(var(--b1));
  border: 1px solid oklch(var(--bc));
  position: fixed;
  padding: 20px;

  @media only screen and (min-width: 1280px) {
    height: calc(100vh - 75px);
    width: calc(100vw - 75px);
  }
`;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(255, 255, 255, 0.1);
//   z-index: -1;
// `;

const SiteLayout = () => {
  return (
    <>
      <Background>
        <Frame>
          <header>
            <h1 className='text-4xl xl:text-7xl font-light pb-2'>
              Rimu Yamaura
            </h1>
            <p className='text-sm pb-8'>Graduate software/web dev</p>
            <Navbar />
          </header>
          <div className='max-w-48 sm:max-w-lg xl:max-w-3xl absolute bottom-0 right-0 p-5'>
            <Outlet />
          </div>
        </Frame>
        <SocialsBar />
        <ThemeToggle />
        {/* <Overlay /> */}
      </Background>
    </>
  );
};
export default SiteLayout;
