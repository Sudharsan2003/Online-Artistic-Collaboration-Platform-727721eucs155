 import './SignUp.css';
 import { useState} from 'react';
 import {Link} from 'react-router-dom';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 import {useDispatch} from 'react-redux';
 import { caseSuccess } from './UseSlice';
function SignUp(){
  const[Name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[mobile,setMobile] = useState("");
  const[password,setPassword] = useState("");
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const handleChangeName=(e)=>{
    setName(e.target.value);
  };
  const handleChangeEmail=(e)=>{
    setEmail(e.target.value);
  };
  const handleChangeMobile=(e)=>{
    setMobile(e.target.value);
  };
  const handleChangePassword=(e)=>{
    setPassword(e.target.value);
  };
  const handleSubmit=(e) => {

    dispatch(caseSuccess({
      "name" :Name,
      "email":email,
      "mobilenumber":mobile,
      "password":password,
    }))
    
    e.preventDefault();
    const data={
      user_name:Name,
      user_email:email,
      user_mobile:mobile,
      user_password:password
    }
    const saved = axios.post("http://localhost:8080/register",data);
    if(saved){
      navigate("/");
      console.log(data);
    }
  }
    return(
      <div className="S_page">
      <div className="center">
      <h1>SignUp</h1>
      <form method="post" onSubmit={handleSubmit}>
      <div className="txt_field">
      <input type="text" name="Name" autoComplete='off' required onChange={handleChangeName}></input>
      <span></span>
      <label>Name</label>
      </div>
      <div className='txt_field'>
      <input type="email" name="Email" value={email} autoComplete='off' required onChange={handleChangeEmail}></input>
      <span></span>
      <label>Email</label>
      </div>
      <div className='txt_field'>
      <input type="tel" name="phone" value={mobile} onChange={handleChangeMobile} required autoComplete='off' ></input>
      <span></span>
      <label>Mobile</label>
      </div>
      <div className="txt_field">
        <input type="password" name="pass" value={password}  onChange={handleChangePassword} required></input>
      <span></span>
      <label>Password</label>
      </div>
      <div className="S_button">
      <button type="submit">SignUp</button>
      </div>
      <div className="login_link">
      Already a member? <Link to="/Login">Login</Link>
      </div>
      </form>
      </div>
      </div> 

    );
}
export default SignUp;