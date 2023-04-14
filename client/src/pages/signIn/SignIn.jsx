import "./signin.css";

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
    </div>
  );
}

export default SignIn;
