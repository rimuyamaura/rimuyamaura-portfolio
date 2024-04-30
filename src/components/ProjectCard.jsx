import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';

import { useState } from 'react';

const ProjectCard = ({ url, img, imgFocus, github, title, text }) => {
  const [imgPopup, setImgPopup] = useState(null);

  return (
    <>
      <div className='flex flex-col items-center sm:flex-row sm:h-[150px] border hover:bg-base-300 hover:bg-opacity-80'>
        <img
          className={`object-cover w-full h-auto sm:h-[148px] sm:w-24 hover:scale-110 duration-500 cursor-pointer ${
            imgFocus === null ? 'object-left' : ''
          }`}
          src={img}
          alt={title}
          onClick={() => setImgPopup(img)}
        />
        <div className='flex flex-col p-4 w-full h-full'>
          <h1 className='mb-2 text-xl xl:text-3xl uppercase'>{title}</h1>
          <div className='grid sm:grid-cols-5 gap-1 h-full'>
            <p className='col-span-4 mb-2 text-xs text-balance'>{text}</p>
            <div className='col-span-1 flex justify-end items-end gap-x-2 h-full'>
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
