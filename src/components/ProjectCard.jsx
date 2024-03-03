import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';

import { useState } from 'react';

const ProjectCard = ({ url, img, github, title, text }) => {
  const [imgPopup, setImgPopup] = useState(null);

  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:h-[162px] border hover:bg-base-300 hover:bg-opacity-80'>
        <img
          className='object-cover object-left w-full h-auto sm:h-40 sm:w-24 hover:scale-110 duration-500 cursor-pointer'
          src={img}
          alt={title}
          onClick={() => setImgPopup(img)}
        />
        <div className='flex flex-col justify-between p-4 w-full h-auto'>
          <h1 className='mb-2 text-2xl xl:text-3xl uppercase'>{title}</h1>
          <p className='mb-3 text-xs text-balance'>{text}</p>
          <div className='flex justify-end  gap-x-4'>
            {github !== '' ? (
              <a href={github} target='_blank' rel='noreferrer'>
                <FaGithubSquare className='h-5 w-5 text-slate-500 hover:text-warning duration-300' />
              </a>
            ) : (
              ''
            )}
            {url !== '' ? (
              <a href={url} target='_blank' rel='noreferrer'>
                <FiExternalLink className='h-5 w-5 text-slate-500 hover:text-warning duration-300' />
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <div
        className='popup-media'
        style={{ display: imgPopup ? 'block' : 'none' }}
      >
        <span onClick={() => setImgPopup(null)}>&times;</span>
        {imgPopup && <img src={imgPopup} />}
      </div>
    </>
  );
};
export default ProjectCard;
