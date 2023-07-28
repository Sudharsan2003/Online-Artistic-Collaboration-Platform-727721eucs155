import './Login.css'; 
 import {Link,useNavigate} from 'react-router-dom';
 import {useState,useEffect} from 'react';
 import { useDispatch,useSelector } from 'react-redux';
 import axios from 'axios';
 import {addUser} from './masterslice';

 function Login(){
  const [email,setEmail]=useState("");
  const[password,SetPassword] = useState("");
  const navigate = useNavigate();
  const[details,setDetails] = useState([]);

  // const email = useSelector((state) => state.email);
  const dispatch = useDispatch();
  const handlechange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value })
  }

  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async()=>{
    try{
      const response = await axios.get("http://localhost:8080/findall");
      setDetails(response.data);
      console.log(response);
    }
    catch(error){
      console.log("Error in Login:",error);
    }
  }
  const handleChangePass=(e)=>{
    const value = e.target.value;
    SetPassword(value);
  }
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addUser(email));
    
    if(email.trim()===""||password.trim()===""){
      alert("Please enter both email and password");
      return;
    }
    
    const User = details.some(User=>User.user_email === email && User.user_password === password);
    
    if(User){
      navigate("/");
  } 
    else{
      alert("User not found,Please check your credentials.");
    }
  }
  return(
    <div className="L_page">
      <div className="c">
      <h1> Login</h1>
      <form onSubmit={handleSubmit}>
      <div className="text_field">
      <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
      <span></span>
      <label>Your Email</label>
      </div>
      <div className="text_field">
      <input type="password" value={password} onChange={handleChangePass} required ></input>
      <span></span>
      <label>Password</label>
      </div>
      <div className="pass">Forgot Password?</div>
      <div className="L_button">
      <button type="submit" >Login</button>
      </div>
      <div className="signup_link">
      Not a member? <Link to="/SignUp">SignUp</Link>
      </div>
      </form>
      </div>
      </div> 
      );
    }
 export default Login;