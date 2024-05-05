import React from 'react';
// import './HomePage.css'; // Import additional CSS for styling

import ImageUploadForm from '../components/ImageUploadForm';
import ImageList from '../components/ImageList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <a href="#home" id="logo">MemoryLane</a>
          <i className="fas fa-bars" id="ham-menu"></i>
          <ul id="nav-bar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Section: Hero */}
      <section className="hero" id="home">
        <img src="header-shape.svg" id="header-shape" alt="Header Shape" />
        <div className="hero-content">
          <h1>Photo Gallery App</h1>
          <p>"A picture is worth a thousand words and every picture tells a story and captures a moment in time and the photo gallery has a thousand stories to tell."</p>
        </div>
        <div className="hero-img">
          <img src="hero.png" alt="Hero" />
        </div>
      </section>

      {/* PhotoGallery */}
      <section>
        <div className="container">
          <div className="header">
            <h1 className="logo">PhotoGallery</h1>
            <SearchBar />
          </div>
          <div className="gallery">
            <ImageList />
          </div>
          {/* <a className="load-more" data-img="curated">Load More</a> */}
        </div>
      </section>

      {/* About */}
      <div id="aboutme">
        <div className="about-section">
          <div className="inner-container">
            <h1>About Me</h1>
            <p className="text">"I am a passionate and driven pre-final undergraduate student with a keen interest in web development and data structures and algorithms. As a tech geek, I am always eager to learn new things and stay up-to-date with the latest trends and technologies in the field.With a strong foundation in web development and DSA, I am confident in my ability to create efficient and user-friendly web applications that meet the needs of modern users. I am dedicated to continuous learning and growth, and I am excited about the possibilities that lie ahead in my career as a web developer.</p>
            <div className="skills">
              <span>Web Developer</span>
              <span>Coding</span>
              <span>Tech- Geek</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="Contact">
        <footer>
          <div className="row footer-about">
            <div className="social-links">
              <a href="https://www.instagram.com/xyz/ "><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="https://github.com/xyz"><i className="fa fa-github"></i></a>
            </div>
          </div>
          <div className="row footer-contact">
            <div className="column">
              <h4>Phone No</h4>
              <p>7839523456</p>
            </div>
            <div className="column">
              <h4>Email</h4>
              <p>xyz@gmail.com</p>
            </div>
          </div>
          <p>Copyright @xyz</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;