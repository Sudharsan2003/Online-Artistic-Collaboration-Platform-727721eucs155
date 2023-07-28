import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CollaborationForm from './CollaborationForm';
import ProjectCreated from './ProjectCreated'; 
import './ArtWrok.css';

const CreateCollaborationPage = () => {
  const history = useHistory(); 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [artistName, setArtistName] = useState('');
  const [artworkTitle, setArtworkTitle] = useState('');
  const addCollaboration = (collaboration) => {
    setIsSubmitted(true);
    setArtistName(collaboration.artistName);
    setArtworkTitle(collaboration.artworkTitle);
    history.push('/ProjectCreated');
  };

  return (
    <div>
      {!isSubmitted ? (
        <CollaborationForm addCollaboration={addCollaboration} />
      ) : (
        <ProjectCreated artistName={artistName} artworkTitle={artworkTitle} />
      )}
    </div>
  );
};

export default CreateCollaborationPage;

