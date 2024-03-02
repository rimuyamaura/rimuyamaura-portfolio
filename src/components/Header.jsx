import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='inline-block'>
      <h1 className='text-4xl xl:text-7xl font-light pb-2 theme-transition'>
        Rimu Yamaura
      </h1>
      <p className='text-xs sm:text-sm pb-4 sm:pb-8 theme-transition'>
        Graduate software/web dev
      </p>
      <Navbar />
    </header>
  );
};
export default Header;
