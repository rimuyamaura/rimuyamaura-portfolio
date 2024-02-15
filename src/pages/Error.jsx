import { useRouteError, Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Background>
        <Frame>
          <main className='grid min-h-[100vh] place-items-center px-8'>
            <div className='text-center'>
              <p className='text-9xl font-semibold text-primary'>404</p>
              <h1 className='mt-4 text-xl font-light tracking-tight'>
                PAGE NOT FOUND
              </h1>
              <p className='font-light mt-6 text-lg leading-7'>
                Sorry, we couldn't find the page you're looking for.
              </p>
              <div className='mt-10'>
                <Link to='/' className='btn btn-outline  btn-accent'>
                  Back to Home
                </Link>
              </div>
            </div>
          </main>
        </Frame>
      </Background>
    );
  }

  return (
    <Background>
      <Frame>
        <main className='grid min-h-[100vh] place-items-center px-8'>
          <h4 className='text-center font-bold texxt-4xl'>
            There was an error...
          </h4>
        </main>
      </Frame>
    </Background>
  );
};
export default Error;
