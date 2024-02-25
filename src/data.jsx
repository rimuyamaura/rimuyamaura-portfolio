import { nanoid } from 'nanoid';
import terramagotchiImg from './assets/terramagotchi.png';
import portfolioImg from './assets/portfolio.png';
import comfyImg from './assets/comfy.png';
import musicImg from './assets/music.png';

export const projects = [
  {
    id: nanoid(),
    img: terramagotchiImg,
    url: 'https://terramagotchi-trofik-edition.web.app',
    github: '',
    title: 'Terramagotchi trofik edition',
    text: 'Interactive simulation where you can observe and engage with the process of plant growth in soil. Created using Javascript and Google Firebase backend.',
  },
  {
    id: nanoid(),
    img: comfyImg,
    url: '',
    github: 'https://github.com/rimuyamaura/comfy-store',
    title: 'Comfy Store',
    text: 'Webpage with online store functionalities. Constructed via React with Tailwindcss using provided api.',
  },
  {
    id: nanoid(),
    img: portfolioImg,
    url: 'https://rimuyamaura.netlify.app',
    github: 'https://github.com/rimuyamaura/rimuyamaura-portfolio',
    title: 'Portfolio Website',
    text: 'My personal portfolio website. Built using React and Tailwindcss.',
  },
  {
    id: nanoid(),
    img: musicImg,
    url: '',
    github: 'https://github.com/rimuyamaura/music-library',
    title: 'Music Library',
    text: "Flask app where you can view and organize tracks from a library of music. Backend is created using SQLalchemy, allowing CRUD operations on the user's collection.",
  },
];
