import { ProjectCard } from '../components';
import { projects } from '../data';
import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const Projects = () => {
  return (
    <Wrapper className='py-[7%]'>
      <h1 className='text-5xl xl:text-9xl text-right pb-[7%]'>PROJECTS</h1>
      <div className='grid gap-12 sm:grid-cols-1 xl:grid-cols-1'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};
export default Projects;
