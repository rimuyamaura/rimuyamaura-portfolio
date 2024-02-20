import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <div>
      <div className='flex flex-col items-center sm:flex-row border hover:bg-base-300'>
        <img
          className='object-cover w-full h-auto sm:h-40 sm:w-24'
          src={img}
          alt={title}
        />
        <div className='flex flex-col justify-between p-4'>
          <h1 className='mb-2 text-2xl xl:text-3xl uppercase'>{title}</h1>
          <p className='mb-3 text-xs text-balance'>{text}</p>
          <div className='flex justify-end gap-x-4'>
            <a href={url}>
              <FiExternalLink className='h-5 w-5 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href={github}>
              <FaGithubSquare className='h-5 w-5 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
