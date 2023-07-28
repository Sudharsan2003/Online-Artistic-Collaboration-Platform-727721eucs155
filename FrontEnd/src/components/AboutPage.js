import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div>
      <h1>About Our Platform</h1>
      <p>Welcome to Our Online Artistry Hub platform! We provide a space for artists of all disciplines to connect, collaborate, and showcase their work.</p>
      <p>Our platform aims to break down geographical barriers and facilitate collaboration among artists from different backgrounds and locations. Whether you're a musician, painter, writer, or any other type of artist, you can find like-minded individuals to collaborate with.</p>
      <p>Here are some key features of our platform:</p>
      <ul>
        <li><strong>Artist Profiles:</strong> Create your own profile to showcase your portfolio, skills, and artistic vision.</li>
        <li><strong>Project Listings:</strong> Browse and join ongoing projects or create your own project and invite others to collaborate.</li>
        <li><strong>Communication Tools:</strong> Connect with other artists through messaging, chat rooms, and video calls to discuss ideas and coordinate your collaborations.</li>
        <li><strong>Resource Sharing:</strong> Share and exchange resources such as reference materials, drafts, and feedback to enhance the collaborative process.</li>
        <li><strong>Showcase and Discover:</strong> Showcase your completed collaborations in our gallery and explore the work of other artists for inspiration.</li>
      </ul>
      <p>We believe that collaboration is the key to innovation and growth in the arts, and we're excited to provide a platform that fosters artistic collaboration in the digital age.</p>
      <p>Join our community today and start collaborating with artists from around the world!</p>
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>Email: artistryhub@gmail.com</p>
            <p>Phone: +91 9876543210, +91 9756328620.</p>
            <p>Address: 27/89,M G Road,Lalpat Nagar,New Delhi, India.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Artistry Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

