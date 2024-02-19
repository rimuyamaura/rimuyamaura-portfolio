import pdf from '../assets/CV.pdf';

const Contact = () => {
  return (
    <div className='text-right theme-transition'>
      <div>
        <h1 className='text-5xl xl:text-9xl pb-12'>CONTACT</h1>
      </div>
      <div>
        <p className='text-xs xl:text-base' style={{ paddingBottom: '7%' }}>
          <a href='mailto:rimuyamaura@gmail.com'>rimuyamaura@gmail.com</a>
        </p>
        <p className='text-xs xl:text-base' style={{ paddingBottom: '7%' }}>
          (+86) 022 516 7123
        </p>
        <p className='text-xs xl:text-base' style={{ paddingBottom: '7%' }}>
          <a href={pdf} target='_blank' rel='noreferrer'>
            View my resume HERE
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contact;
