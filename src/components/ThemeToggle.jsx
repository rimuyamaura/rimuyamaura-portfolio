import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/userSlice';

const ThemeWrapper = styled.div`
  position: fixed;
  width: auto;
  height: auto;

  bottom: calc(100vh - 25px);
  right: 25px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1280px) {
    bottom: calc(100vh - 37.5px);
    right: 37.5px;
  }
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.userState.theme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeWrapper className='text-xs xl:text-sm theme-transition'>
      <input
        type='checkbox'
        checked={theme === 'winter'}
        onChange={handleTheme}
        className='checkbox-xs'
      />
      <p className='hidden sm:flex px-1 pr-4'>LIGHT THEME</p>
      <p className='sm:hidden px-1 pr-4'>LIGHT</p>
      <input
        type='checkbox'
        checked={theme === 'black'}
        onChange={handleTheme}
        className='checkbox-xs'
      />
      <p className='hidden sm:flex px-1'>DARK THEME</p>
      <p className='sm:hidden px-1'>DARK</p>
    </ThemeWrapper>
  );
};
export default ThemeToggle;
