import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <h1 className='text-4xl xl:text-7xl font-light pb-2'>Rimu Yamaura</h1>
      <p className='text-sm pb-8'>Graduate software/web dev</p>
      <Navbar />
    </header>
  );
};
export default Header;
