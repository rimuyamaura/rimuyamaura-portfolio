import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const Home = () => {
  return (
    <Wrapper className='text-right pb-[7%]'>
      <div>
        <h1 className='text-5xl xl:text-9xl pb-12 text-balance'>
          WELCOME TO MY WEBSITE!
        </h1>
      </div>
      <div>
        <p className='text-xs xl:text-base text-balance'>
          Thank you for visiting! Here, you'll find a curated collection of my
          work, thoughts, and projects, all aimed at sharing a glimpse into who
          I am and what I'm passionate about.
        </p>
      </div>
    </Wrapper>
  );
};

export default Home;
