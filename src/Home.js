import React from 'react';
import './Home.css'; // Ensure Home.css is in the same folder

function Home() {
  return (
    <div className="home">
      <header className="top-bar">
        <h1>My Website</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="content">
        <section className="welcome-section">
          <h2>Welcome to My Website!</h2>
          <p>
            This is a simple homepage built with React. Explore the navigation bar
            to learn more about this site.
          </p>
        </section>
        <section className="info-section">
          <h3>Latest Updates</h3>
          <p>Stay tuned for more updates and exciting features coming your way!</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
