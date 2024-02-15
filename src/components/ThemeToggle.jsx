import styled from 'styled-components';

const ThemeWrapper = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  z-index: 999;
  bottom: calc(100vh - 25px);
  left: calc(100vw - 25px);

  @media only screen and (min-width: 1280px) {
    bottom: calc(100vh - 37.5px);
    left: calc(100vw - 37.5px);
  }
`;

const ThemeToggle = () => {
  return (
    <ThemeWrapper>
      <input type='checkbox' checked='checked' className='checkbox' />
      Checkbox
    </ThemeWrapper>
  );
};
export default ThemeToggle;
