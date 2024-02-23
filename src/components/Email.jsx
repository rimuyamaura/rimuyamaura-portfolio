import styled from 'styled-components';

const ThemeWrapper = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  top: calc(100vh - 25px);
  right: 25px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1280px) {
    top: calc(100vh - 37.5px);
    right: 37.5px;
  }
`;

const Email = () => {
  return (
    <ThemeWrapper className='text-xs'>
      <a
        href='mailto:rimuyamaura@gmail.com'
        className='hidden xl:flex px-1 py-1 theme-transition'
      >
        ────────── RIMUYAMAURA@GMAIL.COM ──
      </a>
    </ThemeWrapper>
  );
};
export default Email;
