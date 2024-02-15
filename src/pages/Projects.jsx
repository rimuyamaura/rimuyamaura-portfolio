import { ProjectCard } from '../components';
import { projects } from '../data';

const Projects = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center py-20'>
        <h2 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl capitalize'>
          projects
        </h2>
        <div className='py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
