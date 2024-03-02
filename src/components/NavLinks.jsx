import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: 'about', text: 'About' },
  { id: 3, url: 'projects', text: 'Projects' },
  { id: 4, url: 'contact', text: 'Contact' },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id} className='py-0 sm:py-0.5'>
            <NavLink
              className='text-xs sm:text-base font-bold hover:text-accent transition-colors duration-300'
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
