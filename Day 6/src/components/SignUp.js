import './SignUp.css';
import {Link} from 'react-router-dom';
function SignUp(){
    return( 
      <div className="center">
      <h1>SignUp</h1>
      <form method="post">
      <div className="txt_field">
      <input type="text" name="Name"  required></input>
      <span></span>
      <label>Name</label>
      </div>
      <div className='txt_field'>
      <input type="email" name="Email"  required></input>
      <span></span>
      <label>Email</label>
      </div>
      <div className='txt_field'>
      <input type="tel" name="phone"  required></input>
      <span></span>
      <label>Mobile</label>
      </div>
      <div className="txt_field">
      <input type="password" name="pass" required></input>
      <span></span>
      <label>Password</label>
      </div>
      <div className='txt_field'>
      <input type='password' name="cpass" required></input>
      <span></span>
      <label>Confirm Password</label>
      </div>
      <div className="S_button">
      <input type="submit" value="SignUp"></input>
      </div>
      <div className="login_link">
      Already a member? 
      
      <nav>

      <Link to="/Login">Login</Link>
      </nav>
    
      </div>
      </form>
      </div>

    );
}
export default SignUp;