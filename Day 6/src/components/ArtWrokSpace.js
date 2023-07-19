import React from 'react';
import './ArtWrokSpace.css';
const ArtworkWorkspace = ({ collaboration }) => {
  return (
    <div>
      <h2>Artwork Workspace: {collaboration.artworkTitle}</h2>
      <p>Artist: {collaboration.artistName}</p>
      {/* Add your workspace components and functionality here */}
    </div>
  );
};

export default ArtworkWorkspace;