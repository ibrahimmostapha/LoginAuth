import "./signin.css";

function SignIn() {
  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <form>
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
