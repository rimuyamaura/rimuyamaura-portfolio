import { nanoid } from 'nanoid';
import terramagotchiImg from './images/terramagotchi.png';
import portfolioImg from './images/portfolio.png';
import comfyImg from './images/comfy.png';
import musicImg from './images/music.png';
import socialImg from './images/social.png';
import joblogImg from './images/job-log.png';

export const projects = [
  {
    id: nanoid(),
    img: terramagotchiImg,
    imgFocus: null,
    url: 'https://terramagotchi-trofik-edition.web.app',
    github: '',
    title: 'Terramagotchi trofik edition',
    text: 'Interactive JavaScript simulation where users can observe the diverse elements within the soil ecosystem.',
  },
  {
    id: nanoid(),
    img: socialImg,
    imgFocus: 'center',
    url: 'https://social-app-b8kg.onrender.com',
    github: 'https://github.com/rimuyamaura/social-app',
    title: 'Social-App',
    text: 'Social media application with realtime chat. Built using React, Express.js and MongoDB.',
  },
  {
    id: nanoid(),
    img: joblogImg,
    imgFocus: null,
    url: 'https://job-log-fndaada8cth3f8bh.australiacentral-01.azurewebsites.net/',
    github: 'https://github.com/rimuyamaura/job-log',
    title: 'Job-Log',
    text: 'React Typescript and .NET app for tracking and displaying job application statistics.',
  },
  {
    id: nanoid(),
    img: comfyImg,
    imgFocus: 'center',
    url: 'https://ry-comfy-store.netlify.app',
    github: 'https://github.com/rimuyamaura/comfy-store',
    title: 'Comfy Store',
    text: 'Webpage with online store functionalities. Constructed via React with Tailwindcss using provided api.',
  },
  {
    id: nanoid(),
    img: portfolioImg,
    imgFocus: null,
    url: 'https://rimuyamaura.netlify.app',
    github: 'https://github.com/rimuyamaura/rimuyamaura-portfolio',
    title: 'Portfolio Website',
    text: 'My personal portfolio website. Built with React and DaisyUI.',
  },
  {
    id: nanoid(),
    img: musicImg,
    imgFocus: null,
    url: '',
    github: 'https://github.com/rimuyamaura/music-library',
    title: 'Music Library',
    text: "Flask app where you can view and organize tracks from a library of music. Backend is created using SQLalchemy, allowing CRUD operations on the user's collection.",
  },
];
