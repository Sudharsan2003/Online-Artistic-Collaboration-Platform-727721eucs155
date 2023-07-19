// import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ArtWrok from './components/ArtWrok';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/AboutPage" element={<AboutPage/>}/>
    <Route path="/ArtWrok" element={<ArtWrok/>}/>
    </Routes>
  );
}

export default App;