import { styled, keyframes } from 'styled-components';
import { Outlet } from 'react-router-dom';
import {
  Header,
  SocialsBar,
  ThemeToggle,
  Email,
  ParticleRing,
} from '../components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: oklch(var(--b1));
  transition: background-color 1s ease;
`;

const Frame = styled.div`
  height: calc(100vh - 50px);
  width: calc(100vw - 50px);
  background-color: oklch(var(--b1));
  border: 1px solid oklch(var(--bc));
  position: fixed;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out forwards;

  transition: background-color 1s ease;

  @media only screen and (min-width: 1280px) {
    height: calc(100vh - 75px);
    width: calc(100vw - 75px);
  }
`;

const ParticleRingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  animation: ${fadeIn} 2s ease-in-out forwards;
`;

const SiteLayout = () => {
  return (
    <>
      <Background>
        <Frame>
          <ParticleRingWrapper>
            <ParticleRing />
          </ParticleRingWrapper>
          <Header />
          <div className='max-h-[70vh] lg:max-h-full max-w-64 sm:max-w-lg xl:max-w-3xl absolute bottom-0 right-0 p-5 font-light overflow-auto scrollable'>
            <Outlet />
          </div>
          <SocialsBar />
          <ThemeToggle />
          <Email />
        </Frame>
      </Background>
    </>
  );
};
export default SiteLayout;
