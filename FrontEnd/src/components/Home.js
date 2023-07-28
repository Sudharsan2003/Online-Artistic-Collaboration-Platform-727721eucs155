import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';

function Home() {
      const dispatch = useDispatch();
    const email = useSelector((state) => state.email);
    const handlechange = (e) => {
      dispatch({ type: "SET_EMAIL", payload: e.target.value });
    }
    const {user}=useSelector((state)=>state.master);
  return (
    <div>
      <header>
        <h1><center>ARTISTRY HUB</center></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutPage">AboutUs</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/CommunityPage">Community</Link></li>
            <li><Link to="/FeedForm">FeedBack</Link></li>
          </ul>
        </nav>
      </header>
      <main>
          <h2 onChange={handlechange}>Hello {user}</h2>
        <section className="hero">
          <h2 style={{color: "black"}}>Unleash Your Creativity</h2>
          <p style={{color:'black'}}>Connect with artists from around the world, collaborate on projects, and showcase your work.</p>
        </section>
        <section className="features">
          <div >
            <h3 style={{color: "black"}}>Explore</h3>
            <p style={{color:'black'}}>Discover a vast collection of artworks, music, videos, and more. Follow your favorite artists and stay inspired.
            <Link to="/ExplorePage" className="btn">Explore</Link>
            </p>
          </div>
          <div>
            <h3 style={{color: "black"}}>Create</h3>
            <p style={{color:'black'}}>Showcase your talent and collaborate with other artists on innovative projects. Let your imagination run wild.
            <Link to="/ArtWrok" className="btn">Create</Link>
            </p>
          </div>
          <div>
            <h3 style={{color: "black"}}>Profile</h3>
            <p style={{color:'black'}}>Build your personal profile, share your portfolio, and connect with fellow artists in a vibrant community.
            <Link to="/ProfilePage" className="btn">View Profile</Link>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Artistry Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
