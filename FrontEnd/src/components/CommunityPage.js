import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CommunityPage.css';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await fetch('');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmitPost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('API_URL/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        // Post created successfully, fetch updated posts
        fetchPosts();
        setTitle('');
        setContent('');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Community Page</h1>
      <Link to="/NewPostPage">Create New Post</Link>

      <div>
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmitPost}>
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

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommunityPage;
