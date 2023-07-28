import React from 'react';
import './ProfilePage.css';
const ProfilePage = () => {
  // Replace these with actual artist data fetched from your backend or API
  const artistData = {
    name: 'Sudharsan',
    headline: 'Painter and Illustrator',
    bio: 'As a painter,Draws inspiration from the beauty of nature, the human spirit, and the intricacies of everyday life.',
    socialMediaLinks: {
      instagram: 'https://www.instagram.com/_sudharsan33_/',
      twitter: 'https://twitter.com/vsudharsan33',
    },
    portfolio: [
      { id: 1, title: 'Sunset', imageUrl: 'https://www.musepaintbar.com/events/upload_1000/MysticSunset.jpg' },
      // Add more artworks here
    ],
  };

  return (
    <div className="show-profile-container">
      <div className="header-section">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Profile" />
        <h1>{artistData.name}</h1>
        <p>{artistData.headline}</p>
        <div className="social-media-links">
          <a href={artistData.socialMediaLinks.instagram}>Instagram</a>
          <a href={artistData.socialMediaLinks.twitter}>Twitter</a>
        </div>
      </div>
      <div className="bio-section">
        <h2>About Me</h2>
        <p>{artistData.bio}</p>
      </div>

      {/* Portfolio Showcase */}
      <div className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {artistData.portfolio.map((artwork) => (
            <div key={artwork.id} className="artwork-item">
              <img src={artwork.imageUrl} alt={artwork.title} />
              <p>{artwork.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
