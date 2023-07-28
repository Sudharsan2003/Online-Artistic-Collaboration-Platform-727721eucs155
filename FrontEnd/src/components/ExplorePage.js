import React from 'react';
import { Link } from 'react-router-dom';
const ExploreCard = ({ title, description, link }) => {
  return (
    <div className="explore-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="btn">Let's Start</Link>
    </div>
  );
};

const ExplorePage = () => {
  return (
    <div>
      <h2><center>Let's Start Our Explore Services!!</center></h2>
      <p>Discover a vast collection of artworks, music, writing, videos, and more. Follow your favorite artists and stay inspired.</p>
      <div className="explore-container">
        <ExploreCard
          title="Art Collaboration"
          description="Explore collaborative art projects created by talented artists from all over the world."
          link="/Explore/ArtCollaborationPage"
        />
      <ExploreCard
          title="Music Collaboration"
          description="Discover music from various genres and artists. Listen to their latest tracks and albums."
          link="/Explore/MusicCollaborationPage"
        />
        <ExploreCard
          title="Writing Collaboration"
          description="Participate in collaborative writing projects with writers from diverse backgrounds."
          link="/Explore/WritingCollaborationPage"
        />
      </div>
    </div>
  );
}

export default ExplorePage;
