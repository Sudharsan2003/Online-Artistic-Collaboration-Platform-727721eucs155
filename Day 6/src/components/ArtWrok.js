import React, { useState } from 'react';
import './ArtWrok.css';
const CollaborationForm = ({ addCollaboration }) => {
  const [artistName, setArtistName] = useState('');
  const [artworkTitle, setArtworkTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const collaboration = {
      artistName,
      artworkTitle,
    };

    addCollaboration(collaboration);

    setArtistName('');
    setArtworkTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="collaboration-form">
      <h2>Create Collaboration</h2>
      <div>
        <label htmlFor="artistName">Artist Name:</label>
        <input
          type="text"
          id="artistName"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="artworkTitle">Artwork Title:</label>
        <input
          type="text"
          id="artworkTitle"
          value={artworkTitle}
          onChange={(e) => setArtworkTitle(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default CollaborationForm;
