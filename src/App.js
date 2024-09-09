// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import { Link } from 'react-scroll';
import './App.css'; // Add your CSS styles here
import BookShelf from './img/book-shelf.png';
import StorySharing from './img/StoryDetails.png';
import Typing from './img/Typing-bro.svg';
import Todo from './img/Todo1.png';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TypeAnimation } from 'react-type-animation';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home" className="section home">
        <div className='home-left'>
          <div className='img-container'>
            <img src={Typing} alt="laptop" />
            <div className='img-caption'>
              <a href="https://storyset.com/communication" style={{ color: '#cfd7e8', textDecoration: 'none' }}>Communication illustrations by Storyset </a>

            </div>

          </div>
          </div>

        <div className='home-right'>
          <TypeAnimation
            sequence={[
              'Hi, I am Asanti Bekele!',
              2000, // Wait 2 seconds
              // 'This is a typing animation.',
              // 2000,
              () => {
                console.log('Done typing!'); 
              }
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            speed={50}
            style={{ fontSize: '3em', display: 'inline-block' }}
          />
          {/* <h1>Hi, I am Asanti Bekele</h1> */}
          <p>Full-Stack Developer</p>
         
          <button className="resume-btn">Resume</button>

        </div>
        

      
      </section>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p className='about-me-describtion'>I am a recent graduate with a strong interest in software development, particularly in web technologies and full-stack development. With a few personal projects and a software engineering internship under my belt, I have gained hands-on experience working with technologies like React, Django, and Auth0. I'm passionate about building responsive and user-friendly applications, and I’m excited to continue expanding my skills in both frontend and backend development. Currently, I’m seeking my next opportunity to grow as a developer and contribute to impactful projects.

        </p>
        <div className="contact-me">
          <h2> Lets Stay Connected </h2>
          <a href="https://www.linkedin.com/in/asanti-bekele-65b905179/" target="_blank" rel="noopener noreferrer">

          <span className="linkedin-info" >

            <FontAwesomeIcon icon={faLinkedin} size='2xl' style={{color: "#0B65C2",}}/>
          </span>
          </a>
          <a href="https://github.com/bekel040" target="_blank" rel="noopener noreferrer">

          <span className='github-info'>
            <FontAwesomeIcon icon={faGithubSquare} size='2xl'style={{color: "black",}}/>
          </span>
          </a>
        </div>
        </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on...</p>
        <div className="project-cards"> 
          <div className="project-card">
            <div className='card-img'>
              <a href="https://gray-pond-07067030f.5.azurestaticapps.net" target="_blank" rel="noopener noreferrer">
               <img src={BookShelf} alt="laptop" />
               </a>
            </div>
            <div className='card-text'>
              <h3> Personal Book Management System </h3>
              <p>Collaborated with a team of 5 to develop a responsive, mobile-first website for managing personalized bookshelves, searching for books, and adding ratings. Utilized CSS frameworks to enhance user experience across desktops and smartphones. Integrated openlibrary's API for retrieving book data using ISBN codes, along with webcam and mobile camera integration for barcode scanning.</p>
              <p> ** Please note that it may take a few seconds for certain pages to load as the website fetches data from the openlibrary API, which can be slower due to the API's response time.</p>
            </div>
          </div>
          <div className="project-card">
            <div className='card-img'>
              <a href="https://github.com/bekel040" target="_blank" rel="noopener noreferrer">

               <img src={StorySharing} alt="laptop" />
               </a>
            </div>
            <div className='card-text'>
              <h3> Story-Sharing Platform </h3>
              <p>Developed a platform where users can create, share, and discover stories, featuring a comprehensive search functionality with filters for keywords, genre, tags, number of chapters, and saves. The home page showcases the top 5 books in the U.S. by saves, along with a dynamic genre spotlight to promote diverse content. Logged-in users can write, edit, delete, and save stories, while all users can explore stories written by others and view user profiles displaying their saved and authored stories.</p>
            </div>
          </div>
          <div className="project-card">
            <div className='card-img'>
              <a href="https://delightful-sea-06ed3aa0f.5.azurestaticapps.net/" target="_blank" rel="noopener noreferrer">

               <img src={Todo} alt="laptop" />
               </a>
            </div>
            <div className='card-text'>
              <h3> To-Do App </h3>
              <p>Developed a user-friendly To-Do app to help users manage tasks efficiently by categorizing them or creating new custom categories. The app's intuitive and fun interface allows for easy navigation and quick onboarding. Built with React on the front end, it leverages Microsoft Azure's serverless architecture for the back end, with data storage handled through Azure’s MongoDB for seamless task management and organization.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default App;
