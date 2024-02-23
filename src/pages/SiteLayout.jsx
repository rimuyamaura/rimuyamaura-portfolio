import styled, { keyframes } from 'styled-components';
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loading, SocialsBar, ThemeToggle, Email } from '../components';

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

const SiteLayout = () => {
  return (
    <>
      <Background>
        <Frame>
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
