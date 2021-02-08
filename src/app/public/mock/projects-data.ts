import {Projects} from "../interfaces/projects";

export const PROJECTS: Projects[] = [
  {
    id: 1,
    name: 'Проект “Мишка”',
    route: '/projects/mishka',
    description: 'Учебный проект HTML-Академи',
    technologies: 'Вёрстка',
    images: [
      {
        src: '../assets/img/Project_1_desktop.jpg',
        srcset: '../assets/img/Project_1_desktop@2x.jpg',
        alt: 'Ссылка на страницу с проектом Мишка',
        title: 'Проект Мишка'
      }
    ]
  },
  {
    id: 2,
    name: 'Проект “Седона”',
    route: '/projects/sedona',
    description: 'Учебный проект HTML-Академи',
    technologies: 'Вёрстка',
    images: [
      {
        src: '../assets/img/Project_2_desktop.jpg',
        srcset: '../assets/img/Project_2_desktop@2x.jpg',
        alt: 'Ссылка на страницу с проектом Седона',
        title: 'Проект Седона'
      }
    ]
  },
  {
    id: 3,
    name: 'Проект “Affinage”',
    route: '/projects/affinage',
    description: 'Тестовое задание компании Affinage',
    technologies: 'Вёрстка, слайдер на нативном JS',
    images: [
      {
        src: '../assets/img/Project_3_desktop.jpg',
        srcset: '../assets/img/Project_3_desktop@2x.jpg',
        alt: 'Ссылка на страницу с проектом Affinage',
        title: 'Проект “Affinage”'
      }
    ]
  }
]
