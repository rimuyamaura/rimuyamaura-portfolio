import pdf from '../assets/CV.pdf';

const Contact = () => {
  return (
    <div className='text-right theme-transition pb-[7%]'>
      <div>
        <h1 className='text-5xl xl:text-9xl pb-[20%]'>CONTACT</h1>
      </div>
      <div>
        <p className='text-xs xl:text-base py-[5%] '>
          <a href='mailto:rimuyamaura@gmail.com' className='hover:text-warning'>
            rimuyamaura@gmail.com
          </a>
        </p>
        <p className='text-xs xl:text-base py-[5%]'>(+86) 022 516 7123</p>
        <p className='text-xs xl:text-base py-[5%]'>
          <a
            href={pdf}
            className='hover:text-warning'
            target='_blank'
            rel='noreferrer'
          >
            View my resume HERE
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contact;
