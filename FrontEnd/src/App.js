// import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ArtWrok from './components/ArtWrok';
import CommunityPage from './components/CommunityPage';
import ProfilePage from './components/ProfilePage';
import ExplorePage from './components/ExplorePage';
import ArtCollaborationPage from './components/ArtCollaborationPage';
import MusicCollaborationPage from './components/MusicCollaborationPage';
import WritingCollaborationPage from './components/WritingCollaborationPage';
import { BrowserRouter } from 'react-router-dom';
import FeedForm from './components/FeedForm';
import { Provider } from 'react-redux';
import {persistor,store} from './components/Store';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/ExplorePage" element={<ExplorePage/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/AboutPage" element={<AboutPage/>}/>
    <Route path="/ArtWrok" element={<ArtWrok/>}/>
    <Route path="/CommunityPage" element={<CommunityPage/>}/>
    <Route path="/ProfilePage" element={<ProfilePage/>}/>
    <Route path="/Explore/ArtCollaborationPage" element={<ArtCollaborationPage/>}/>
    <Route path="/Explore/MusicCollaborationPage" element={<MusicCollaborationPage/>}/>
    <Route path="/Explore/WritingCollaborationPage" element={<WritingCollaborationPage/>}/>
    <Route path="/FeedForm" element={<FeedForm/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;