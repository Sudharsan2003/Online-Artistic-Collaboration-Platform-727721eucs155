import React from 'react';
import './Home.css';
import ReactDOM from 'react-dom';

function Home() {
  return (
    <div>
      <header>
        <h1><center>Artistic Collaboration Platform</center></h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">Create</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Unleash Your Creativity</h2>
          <p>Connect with artists from around the world, collaborate on projects, and showcase your work.</p>
          <a href="#" className="btn">Get Started</a>
        </section>
        <section className="features">
          <div >
            <h3>Explore</h3>
            <p>Discover a vast collection of artworks, music, videos, and more. Follow your favorite artists and stay inspired.</p>
          </div>
          <div>
            <h3>Create</h3>
            <p>Showcase your talent and collaborate with other artists on innovative projects. Let your imagination run wild.</p>
          </div>
          <div>
            <h3>Profile</h3>
            <p>Build your personal profile, share your portfolio, and connect with fellow artists in a vibrant community.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Artistic Collaboration Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
