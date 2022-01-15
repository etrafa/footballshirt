import { useState } from "react/cjs/react.development";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FooterItems.css";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [signUpText, setSignUpText] = useState("");
  const [successIcon, setSuccessIcon] = useState();
  const [successColor, setSucessColor] = useState();

  const signUpHandler = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setSignUpText("Passwords are not the same!");
      setSuccessIcon(faTimes);
      setSucessColor("sign__up__modal-error");
    } else {
      setSignUpText("We sent confirmation mail to your e-mail address.");
      setSuccessIcon(faCheckCircle);
      setSucessColor("sign__up__modal");
    }
    if (firstName === "" && lastName === "" && email === "") {
      setSignUpText("Please fill all the area!");
      setSuccessIcon(faTimes);
      setSucessColor("sign__up__modal-error");
    }
  };

  return (
    <>
      <div className="create__account__container">
        <h1>CREATE AN ACCOUNT</h1>
      </div>
      <form className="create__account__form">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          required={true}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <div className={successColor}>
          <FontAwesomeIcon icon={successIcon} />
          <p>{signUpText}</p>
        </div>
        <button onClick={signUpHandler}>Sign Up</button>
      </form>
    </>
  );
};

export default CreateAccount;
