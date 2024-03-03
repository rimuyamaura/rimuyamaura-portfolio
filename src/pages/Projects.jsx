import { ProjectCard } from '../components';
import { projects } from '../data';

const Projects = () => {
  return (
    <div className='py-[7%]'>
      <h1 className='text-5xl xl:text-9xl text-right pb-[7%]'>PROJECTS</h1>
      <div className='grid gap-12 sm:grid-cols-1 xl:grid-cols-1'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
