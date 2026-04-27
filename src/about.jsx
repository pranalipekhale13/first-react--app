import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <h1>About This Project</h1>

      <div className="about-content">
        <p>
          This is a simple React application demonstrating manual routing without external routing libraries.
          Built with modern web technologies for fast development and optimal performance.
        </p>

        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <ul>
            <li><strong>React</strong> - Component-based UI library</li>
            <li><strong>Vite</strong> - Fast build tool and development server</li>
            <li><strong>JavaScript</strong> - Modern ES6+ syntax</li>
            <li><strong>CSS</strong> - Custom styling with responsive design</li>
          </ul>
        </div>

        <div className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Manual hash-based routing</li>
            <li>Hot Module Replacement (HMR)</li>
            <li>Responsive design</li>
            <li>Clean, maintainable code</li>
          </ul>
        </div>
      </div>

      <div className="navigation">
        <a href="#home" className="nav-link">← Back to Home</a>
        <a href="#contact" className="nav-link">Contact Us →</a>
      </div>
    </div>
  );
}

export default About;