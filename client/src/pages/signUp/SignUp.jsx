import "./signup.css";

function SignUp() {
  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form>
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;