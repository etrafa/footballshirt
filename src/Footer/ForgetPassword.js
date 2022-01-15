const ForgetPassword = () => {
  return (
    <>
      <div className="forget__password__container">
        <h1>Forgot Password?</h1>
        <div className="forget__password__text">
          <p>
            Please enter your email address below. You will receive a link to
            reset your password.
          </p>
          <form className="create__account__form">
            <label htmlFor="email">Email Address</label>
            <input type="email" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
