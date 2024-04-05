import cv from '../assets/CV.pdf';
import transcript from '../assets/unofficialTranscript.pdf';
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

const Contact = () => {
  return (
    <Wrapper className='text-right pb-[7%]'>
      <div>
        <h1 className='text-5xl xl:text-9xl pb-[20%]'>CONTACT</h1>
      </div>
      <div>
        <p className='text-xs xl:text-base py-[5%] '>
          <a href='mailto:rimuyamaura@gmail.com' className='hover:text-warning'>
            rimuyamaura@gmail.com
          </a>
        </p>
        <p className='text-xs xl:text-base py-[5%]'>(+64) 22 516 7123</p>
        <p className='text-xs xl:text-base py-[5%]'>
          <a
            href='https://www.linkedin.com/in/rimu-yamaura-2a080b254/'
            className='hover:text-warning'
            target='_blank'
            rel='noreferrer'
          >
            Linkedin Profile HERE
          </a>
        </p>
        <p className='text-xs xl:text-base py-[5%]'>
          <a
            href={cv}
            className='hover:text-warning'
            target='_blank'
            rel='noreferrer'
          >
            View my resume HERE
          </a>
        </p>
        <p className='text-xs xl:text-base py-[5%]'>
          <a
            href={transcript}
            className='hover:text-warning'
            target='_blank'
            rel='noreferrer'
          >
            View academic transcript (unofficial) HERE
          </a>
        </p>
      </div>
    </Wrapper>
  );
};
export default Contact;
