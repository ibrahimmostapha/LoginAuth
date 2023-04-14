import "./signin.css";
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <form>
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div className="link">
        <p>Don't have an account?</p>
        <Link to="/signup" className="sign-link">Create Account</Link>
      </div>
    </div>
  );
}

export default SignIn;
