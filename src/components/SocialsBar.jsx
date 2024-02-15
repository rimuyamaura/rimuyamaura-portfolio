import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const SocialsWrapper = styled.div`
  position: fixed;
  width: 40px;
  height: auto;
  z-index: 999;

  // Place near bottom left corner
  transform: translateY(-50%);
  top: 80%;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: oklch(var(--a));
  padding: 5px;

  @media only screen and (min-width: 1280px) {
    width: 50px;
  }
`;

const SocialText = styled.div`
  //Rotate text 90 degrees
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const socials = [
  {
    id: nanoid(),
    url: 'https://www.linkedin.com/in/rimu-yamaura-2a080b254/',
    icon: (
      <FaLinkedin className='text-base-100 w-8 h-8 xl:w-10 xl:h-10 hover:text-success transition-colors duration-400' />
    ),
    title: 'LinkedIn',
  },
  {
    id: nanoid(),
    url: 'https://github.com/rimuyamaura',
    icon: (
      <FaGithubSquare className='text-base-100 w-8 h-8 xl:w-10 xl:h-10 hover:text-success transition-colors duration-400' />
    ),
    title: 'Github',
  },
  {
    id: nanoid(),
    url: 'https://twitter.com/rimuyamaura',
    icon: (
      <FaTwitter className='text-base-100 w-8 h-8 xl:w-10 xl:h-10 hover:text-success transition-colors duration-400' />
    ),
    title: 'Twitter',
  },
];

const SocialsBar = () => {
  return (
    <SocialsWrapper>
      {socials.map((social) => {
        const { id, url, icon, title } = social;
        return (
          <a
            key={id}
            href={url}
            target='_blank'
            rel='noreferrer'
            className='text-2xl p-1'
          >
            {icon}
          </a>
        );
      })}
      <SocialText className='hidden md:flex font-light text-xl text-base-100'>
        SOCIALS
      </SocialText>
    </SocialsWrapper>
  );
};
export default SocialsBar;
