import { ProjectCard } from '../components';
import { projects } from '../data';

const Projects = () => {
  return (
    <div className='pb-[7%]'>
      <h1 className='text-5xl xl:text-9xl theme-transition text-right pb-[7%]'>
        PROJECTS
      </h1>
      <div className='grid gap-12 sm:grid-cols-1 xl:grid-cols-1 theme-transition'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
