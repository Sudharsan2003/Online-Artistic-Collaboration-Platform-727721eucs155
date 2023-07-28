import React from 'react';

const ProjectCreated = ({ artistName, artworkTitle }) => {
  return (
    <div>
      <h2>Project Created!</h2>
      <p>
        Artist Name: {artistName}
        <br />
        Artwork Title: {artworkTitle}
      </p>
    </div>
  );
};

export default ProjectCreated;
