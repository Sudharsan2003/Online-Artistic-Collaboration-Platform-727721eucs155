import React, { useState } from 'react';

const WritingCollaborationPage = () => {
  const [writings, setWritings] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a new writing object
    const newWriting = {
      title,
      content,
    };

    // Adding the new writing to the existing list
    setWritings([...writings, newWriting]);

    // Clearing the form fields
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2><center>Writing Collaboration Page</center></h2>
      <p>Participate in collaborative writing projects with writers from diverse backgrounds.</p>
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
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Submitted Writings</h3>
        {writings.map((writing, index) => (
          <div key={index} className="writing">
            <h4>{writing.title}</h4>
            <p>{writing.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WritingCollaborationPage;

