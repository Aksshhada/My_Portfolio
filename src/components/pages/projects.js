import React from "react";
import "./projects.css";
import { FaGithub } from "react-icons/fa";


const projects = () => {
  return (

    <div className="projects-container">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="card-container">
        <div className="card">
          <img src="/images/p1.png" alt="Grocery Store App" />

          <div className="card_title">
            <h2>Grocery Store App</h2>
           
          <p>
            Introducing my Grocery Store App, a seamless and user-friendly
            solution built with React. Easily manage your shopping list by
            entering groceries one by one. Streamline your shopping experience,
            stay organized, and never miss an item with this intuitive and
            efficient application. Happy shopping made simple!
          </p>
          
          <a 
              href="https://github.com/yourusername/grocery-store-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github_link"
            >
              <FaGithub size={25} color="#333" />
            </a>

        </div>
        </div>


        <div className="card">
          <img src="/images/p5.png" alt="My Portfolio" />
          <div className="card_title">
            <h2>Grocery Store App</h2>
          <p>
            Check out<b> My Portfolio!</b> It's like my online showcase where I share
            my skills, experiences, and cool projects. Easy to navigate. Explore
            what I do, what I've learned, and some neat things I've created
            using React. Let's connect and chat about exciting opportunities!
          </p>
          <a 
              href="https://github.com/yourusername/grocery-store-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github_link"
            >
              <FaGithub size={25} color="#333" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/p2.png" alt="Cafe Menu App" />
          <div className="card_title">
            <h2>Grocery Store App</h2>
          <p>
            Discover the essence of my <b>Cafe Menu App</b>, a delightful creation
            using React. Immerse yourself in a digital menu experience that
            combines modern design with user-friendly navigation. Explore a
            diverse array of delectable offerings, from aromatic coffees to
            savory treats, all elegantly presented in this immersive
            React-powered cafe menu.
          </p>
          <a 
              href="https://github.com/yourusername/grocery-store-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github_link"
            >
              <FaGithub size={25} color="#333" />
            </a>
        </div>
        </div>
        <div className="card">
          <img src="/images/p3.png" alt="My Portfolio" />
          <div className="card_title">
            <h2>Grocery Store App</h2>
          <p>
            Check out<b> My Portfolio!</b> It's like my online showcase where I share
            my skills, experiences, and cool projects. Easy to navigate. Explore
            what I do, what I've learned, and some neat things I've created
            using React. Let's connect and chat about exciting opportunities!
          </p>
          <a 
              href="https://github.com/yourusername/grocery-store-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github_link"
            >
              <FaGithub size={25} color="#333" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/p4.png" alt="Animated Login Form" />
          <div className="card_title">
            <h2>Grocery Store App</h2>
          <p>
            Presenting my <b>Animated Login Form</b> created with HTML and CSS Experience a
            delightful and engaging login process with smooth animations. Enjoy
            the simplicity of this user-friendly form, making access to your
            account both visually appealing and easy.
          </p>
          <a 
              href="https://github.com/yourusername/grocery-store-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github_link"
            >
              <FaGithub size={25} color="#333" />
            </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default projects;