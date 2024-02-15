import { NavLink } from 'react-router-dom';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useState } from 'react';
import NavLinks from './NavLinks';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLinks />
      </ul>

      {/* THEME TOGGLE
        <label className='swap swap-rotate'>
          <input type='checkbox' />
          <BsSunFill className='swap-on h-4 w-4' />
          <BsMoonFill className='swap-off h-4 w-4' />
        </label> */}
    </nav>
  );
};
export default Navbar;
