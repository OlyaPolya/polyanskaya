
import { AppContentProps } from './types'

export const appContent: AppContentProps = {
  pages: [
    {
      path: '/',
      title: 'Главная'
    },
    {
      path: '/skills',
      title: 'Скиллы'
    },
    {
      path: '/contacts',
      title: 'Контакты'
    },
    {
      path: '/projects',
      title: 'Проекты'
    }
  ],

  about : {
    title: 'Обо мне',
  },
  jobs:{
    title:'Опыт',
    description: ['С 2023 занимаюсь поддержкой, разработкой, развитием нового функционала на двух проектах одной компании: приложение для знакомств и приложение аренды недвижимости.'],

  },
  skills:{
    title:'Стэк',
    description: ['Крашу кнопки!', 'Играю со шрифтами!', 'Исправляю баги!', 'Внедряю фичи!', 'Закрываю таски!' ],
    stack: [
      {
        title: 'Git',
        img: '/img/logo/Git.svg',
      },
      {
        title: 'React',
        img: '/img/logo/React.svg',
      },
      {
        title: 'Vue',
        img: '/img/logo/Vue.svg',
      },
      {
        title: 'SASS',
        img: '/img/logo/Sass.svg',
      },
      {
        title: 'Docker',
        img: '/img/logo/Docker.png',
      },
      {
        title: 'JS',
        img: '/img/logo/JavaScript.png',
      },
      {
        title: 'Webpack',
        img: '/img/logo/Webpack.svg',
      },
      {
        title: 'TS',
        img: '/img/logo/Typescript.png',
      }
    ],
  },
  courses:{
    title:'Курсы и обучение'
  },
  contacts: {
    title : 'Контакты',
    stack: [
      {
        title: 'polyanskaya3000@gmail.com',
        img: '/img/logo/Gmail.svg',
        link: 'mailto:polyanskaya3000@gmail.com'
      },
      {
        title: 'o_polyanskaya',
        img: '/img/logo/Telegram.svg',
        link: 'https://t.me/o_polyanskaya'
      },
      {
        title: 'olga_polyanskaya',
        img: '/img/logo/discord.svg',
        link: 'https://discordapp.com/users/919941750548738059/ '
      },
      {
        title: 'OlyaPolya',
        img: '/img/logo/Git.svg',
        link: 'https://github.com/OlyaPolya'
      }
    ]
  },
  portfolio: {
    title : 'Проекты и всякое',
    stack: [
     {
        title: 'Vitaly Polyansky Portfolio',
        description: 'Проект-портфолио лучшего в мире дизайнера анимированных html-5 баннеров. Он работает с известными в мире компаниями. Баннеры для рекламы не нужны?',
        img: '/img/projects/Polyansky.png',
        link: 'https://polyansky.ru/',
        badges: ['React', 'SASS']
      },
      {
        title: 'Alexa Portfolio',
        description: 'Пет проект был изготовлен в рамках самостоятельного обучения в RS-School',
        img: '/img/projects/Portfolio.png',
        link: 'https://rolling-scopes-school.github.io/olyapolya-JSFEPRESCHOOL/portfolio/',
        badges: ['JS', 'SASS']
      },
      {
        title: 'Memory game',
        description: 'Memory Game - Игра для тренировки памяти. Играй и ничего не выигрывай!',
        img: '/img/projects/Memory.png',
        link: 'https://rolling-scopes-school.github.io/olyapolya-JSFEPRESCHOOL/memory-game/'
      },
       {
        title: 'Virtual Keyboard',
        description: 'Виртуальная клавиатура',
        img: '/img/projects/Keyboard.png',
        link: 'https://olyapolya.github.io/Virtual-Keyboard/virtual-keyboard/dist/'
      },
      {
        title: 'cssMemSlider',
        description: 'Только CSS and no JS',
        img: '/img/projects/Mem.png',
        link: 'https://olyapolya.github.io/cssMemSlider/cssMemSlider/'
      },
       {
        title: 'Shelter',
        description: 'Пет проект был изготовлен в рамках самостоятельного обучения в RS-School',
        img: '/img/projects/Shelter.png',
        link: 'https://rolling-scopes-school.github.io/olyapolya-JSFE2022Q1/shelter/pages/main/'
      },
    ]
  }
};

export const IMAGE_SIZE = {
  height: 20,
  width: 20
}
