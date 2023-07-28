import React, { useState } from 'react';

const MusicCollaborationPage = () => {
  const [musicTracks, setMusicTracks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a new music track object
    const newTrack = {
      title,
      description,
    };

    // Adding the new track to the existing list
    setMusicTracks([...musicTracks, newTrack]);

    // Clearing the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2><center>Music Collaboration Page</center></h2>
      <p>Discover music from various genres and artists. Listen to their latest tracks and albums.</p>
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
        <h3>Submitted Tracks</h3>
        {musicTracks.map((track, index) => (
          <div key={index} className="music-track">
            <h4>{track.title}</h4>
            <p>{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicCollaborationPage;
