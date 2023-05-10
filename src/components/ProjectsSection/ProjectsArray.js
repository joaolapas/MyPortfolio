
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import calculator from "../../images/calculator.png";
import kindOfBlog from "../../images/kindOfBlog.png";
import searchYourMovie from "../../images/searchYourMovie.png";

const Cards = [
  {
    id: 1,
    image: searchYourMovie,
    title: 'Search Your Movie',
    description: "A simple project, but made following the best practices",
    longDescription: "This is a project I worked on at the suggestion of my experienced mentor. He advised me to take on a simple project and start from scratch, without following tutorials or videos. I tried to do it on my own, only consulting documentation and guidelines for clean and organized code, while treating and fixing errors along the way. In this project, you can search for a movie by its name, filter the results, and view details. I used Tailwind for styling.",
    tools: ['React JS', 'Tailwind', 'Clean code rules', 'Responsivity'],
    linkCode: 'https://github.com/joaolapas/SearchYourMovie/',
    linkLive: 'https://joaolapas.github.io/SearchYourMovie/',
  },
  {
    id: 2,
    image: kindOfBlog,
    title: 'KindOfBlog API',
    description: "A back-end API for a blog/social network",
    longDescription: "To practice backend development, I created an entire API for a kind of blog/social network where it's possible to create, delete, like, comment, and delete posts. The API documentation is done using Swagger.",
    tools: ['Node JS', 'Express', 'Mongo DB', 'Mongoose', 'bCrypt', 'JWT', 'Swagger'],
    linkCode: 'https://github.com/joaolapas/kindOfBlog/',
    linkLive: 'https://github.com/joaolapas/kindOfBlog/',
  },
    {
      id: 3,
      image: project3,
      title: 'eShop',
      description: "Small e-commerce site,",
      longDescription: "Includes basic eCommerce functionalities such as adding items to the cart, payment integration with the Stripe API, user authentication, and a restricted area for adding products. It also has a backend to support the frontend functionalities",
      tools: ['React JS', 'React-Router', 'Sass', 'Zustand', 'ExpressJS', 'Cloudinary', 'MongoDB'],
      linkCode: 'https://github.com/joaolapas/eShop.v2/',
      linkLive: 'https://joaolapas.github.io/eShop.v2/',
    },
    {
      id: 4,
      image: project1,
      title: 'Portfolio Website',
      description: "My portfolio website is built with React.js",
      longDescription: "Welcome to my portfolio website, built with React.js! This simple and almost single-page site uses react-scroll for smooth navigation and includes a contact page accessible with react-router. The site features animations to enhance the user experience and provide a more engaging interface. Overall, this website showcases my skills in React.js development and my ability to create clean, modern designs.",
      tools: ['React JS', 'React-Scroll', 'React-Router', 'StyledComponents', 'Framer Motion', 'React-toastify', 'Email JS'],
      linkCode: 'https://github.com/joaolapas/MyPortfolio/',
      linkLive: 'https://joaolapas.github.io/MyPortfolio/',
    },
    {
      id: 5,
      image: project2,
      title: 'Pokédex',
      description: "Simple project for API consumption study purposes",
      longDescription: "This was a simple project I created for the purpose of studying API consumption. I attempted to build a classic Pokedex and later modified the fetching process to load data in stages as it was taking too long. Additionally, I added a feature to save favorites in local storage. This project was my first experience with API consumption.",
      tools: ['React JS', 'React-Router', 'vanilla CSS',],
      linkCode: 'https://github.com/joaolapas/pokedex/',
      linkLive: 'https://joaolapas.github.io/pokedex/',
    },
    {
      id: 6,
      image: calculator,
      title: 'Calculator',
      description: "Simple calculator made for the freeCodeCamp course.",
      longDescription: "II created a Very simple calculator project for FreeCodeCamp where I followed specific guidelines to perform basic math operations and customize the calculator's appearance using CSS styling.",
      tools: ['React JS', 'vanilla CSS', ],
      linkCode: 'https://github.com/joaolapas/calculator/',
      linkLive: 'https://joaolapas.github.io/calculator/',
    },
  ];

export default Cards
