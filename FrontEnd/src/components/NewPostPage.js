import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the submitted data
    console.log('Title:', title);
    console.log('Content:', content);

    // Redirect to the community page or any desired location
    history.push('/community');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPostPage;
