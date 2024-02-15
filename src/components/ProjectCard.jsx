import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <div className='card-compact bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{text}</p>
        <div className='flex justify-end gap-x-4'>
          <a href={url}>
            <FiExternalLink className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
