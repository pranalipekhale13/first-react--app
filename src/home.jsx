import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Our React App</h1>
        <p className="hero-subtitle">
          A modern web application built with React and Vite, featuring manual JavaScript routing for fast navigation.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">Learn More</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3> Fast Performance</h3>
            <p>Built with Vite for lightning-fast development and optimized production builds.</p>
          </div>
          <div className="feature-card">
            <h3>Hot Module Replacement</h3>
            <p>Enjoy instant updates during development without losing application state.</p>
          </div>
          <div className="feature-card">
            <h3> Responsive Design</h3>
            <p>Optimized for all devices - desktop, tablet, and mobile.</p>
          </div>
          <div className="feature-card">
            <h3>Modern UI</h3>
            <p>Clean, modern interface with smooth animations and intuitive navigation.</p>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <h2>About Our Application</h2>
        <p>
          This application demonstrates modern web development practices with React.
          Explore our pages to learn more about our team and how to get in touch.
        </p>
        <div className="navigation-links">
          <a href="#about" className="nav-link">About Us →</a>
          <a href="#contact" className="nav-link">Contact →</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
