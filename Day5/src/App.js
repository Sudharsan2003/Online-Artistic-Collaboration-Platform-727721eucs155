// import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Home" element={<Home/>}/>
    </Routes>
  );
}

export default App;