import React, { useState } from 'react';
import './ProjectCreation.css';
const ProjectCreationPage = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    images: [],
    tags: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setProjectData({ ...projectData, images: files });
  };

  const handleTagChange = (e) => {
    const tags = e.target.value.split(',');
    setProjectData({ ...projectData, tags });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a backend API endpoint to handle form submission
    // Replace 'YOUR_API_URL' with the actual endpoint URL
    fetch('YOUR_API_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful submission (e.g., show a success message or redirect)
        console.log('Project created successfully!', data);
      })
      .catch((error) => {
        // Handle errors (e.g., show an error message)
        console.error('Error creating project:', error);
      });
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={projectData.title}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Images (Hold 'Ctrl' or 'Cmd' to select multiple images):
          <input type="file" name="images" multiple onChange={handleImageUpload} />
        </label>

        <label>
          Tags (comma-separated):
          <input
            type="text"
            name="tags"
            value={projectData.tags}
            onChange={handleTagChange}
          />
        </label>

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default ProjectCreationPage;
