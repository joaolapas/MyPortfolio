
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";

const Cards = [
    {
      id: 1,
      image: project1,
      title: 'Portfolio Website',
      description: "My portfolio website is built with React.js and features smooth navigation with react-scroll, a contact page with react-router, and engaging animations.",
      longDescription: "Welcome to my portfolio website, built with React.js! This simple and almost single-page site uses react-scroll for smooth navigation and includes a contact page accessible with react-router. The site features animations to enhance the user experience and provide a more engaging interface. Overall, this website showcases my skills in React.js development and my ability to create clean, modern designs.",
      tools: ['React JS', 'React-Scroll', 'React-Router', 'StyledComponents', 'Framer Motion', 'React-toastify', 'Email JS'],
      linkCode: 'https://github.com/joaolapas/MyPortfolio/',
      linkLive: 'https://joaolapas.github.io/MyPortfolio/',
    },
    {
      id: 2,
      image: project2,
      title: 'Pokédex',
      description: "Simple project for API consumption study purposes",
      longDescription: "This was a simple project I created for the purpose of studying API consumption. I attempted to build a classic Pokedex and later modified the fetching process to load data in stages as it was taking too long. Additionally, I added a feature to save favorites in local storage. This project was my first experience with API consumption.",
      tools: ['React JS', 'React-Router', 'vanilla CSS',],
      linkCode: 'https://github.com/joaolapas/pokedex/',
      linkLive: 'https://joaolapas.github.io/pokedex/',
    },
    
  ];

export default Cards
