import React, { useState } from 'react';

const ArtCollaborationPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a new artwork object
    const newArtwork = {
      title,
      description,
    };

    // Adding the new artwork to the existing list
    setArtworks([...artworks, newArtwork]);

    // Clearing the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2><center>Art Collaboration Page</center></h2>
      <p>Welcome to the art collaboration page! Share your artwork and collaborate with other artists.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Submitted Artworks</h3>
        {artworks.map((artwork, index) => (
          <div key={index} className="artwork">
            <h4>{artwork.title}</h4>
            <p>{artwork.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtCollaborationPage;
