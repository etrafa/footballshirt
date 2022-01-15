import "./FooterItems.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="logIn__container">
        <h1>LOGIN OR CREATE AN ACCOUNT</h1>
      </div>
      <div className="registration__container">
        <h4>NEW HERE?</h4>
        <p>Registration is free and easy!</p>
        <p>Faster checkout</p>
        <p>Save multiple shpipping addresses</p>
        <p>View and track orders and more</p>
      </div>
      <Link to={"/sign-up"}>
        <button className="createAccount__button">Create an Account</button>
      </Link>

      <div className="already__registered">
        <h4>ALREADY REGISTERED?</h4>
        <p>If you have an account, please log in.</p>
        <form className="create__account__form">
          <label htmlFor="email">Email Address</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <Link to={"/forget-password"} className="forgot__password">
            Forgot your password?
          </Link>
        </form>
      </div>
      <button className="logIn__button" type="submit">
        Log in
      </button>
    </>
  );
};

export default Login;
