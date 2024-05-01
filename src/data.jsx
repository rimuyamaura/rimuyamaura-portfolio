import { nanoid } from 'nanoid';
import terramagotchiImg from './assets/terramagotchi.png';
import portfolioImg from './assets/portfolio.png';
import comfyImg from './assets/comfy.png';
import musicImg from './assets/music.png';
import socialImg from './assets/social.png';

export const projects = [
  {
    id: nanoid(),
    img: terramagotchiImg,
    imgFocus: null,
    url: 'https://terramagotchi-trofik-edition.web.app',
    github: '',
    title: 'Terramagotchi trofik edition',
    text: 'Interactive JavaScript simulation where users can observe the diverse elements within the soil ecosystem. Using a Google Firebase backend.',
  },
  {
    id: nanoid(),
    img: socialImg,
    imgFocus: 'center',
    url: 'https://social-app-b8kg.onrender.com',
    github: 'https://github.com/rimuyamaura/social-app',
    title: 'Social-App',
    text: 'React Social media application with realtime chat. Backend built using Express.js and MongoDB.',
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
    text: 'My personal portfolio website. Built with React.',
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
