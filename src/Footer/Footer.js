import visa from "./footer-asset/visa.png";
import masterCard from "./footer-asset/mastercard.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__lists">
          <div className="company__info">
            <h3>COMPANY INFO</h3>
            <hr />
            <ul>
              <li>About Us</li>
              <li>Delivery Guarantee</li>
              <li>Privacy Policy</li>
              <li>Terms of Use </li>
            </ul>
          </div>
          <div className="customer__service">
            <h3>CUSTOMER SERVICE</h3>
            <hr />
            <ul>
              <li>Size Chart</li>
              <li>FAQ & Help</li>
              <li>Shipping & Delivery</li>
              <li>Return Policy</li>
              <li>Payment Method</li>
            </ul>
          </div>
          <div className="my__account">
            <h3>MY ACCCOUNT</h3>
            <hr />
            <ul>
              <li>LOG IN</li>
              <li>SIGN UP</li>
              <li>My Account</li>
              <li>My Orders</li>
              <li>Forgot Password</li>
            </ul>
          </div>
          <div className="contact__us">
            <h3>CONTACT US</h3>
            <hr />
            <ul>
              <li>
                <a href="mailto:etemsenel96@hotmail.de">
                  etemsenel96@hotmail.de
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="gmail__hr" />
        <div className="footer__copyright">
          <div className="footer__copyright__left">
            © 2021 <span>EL Store</span> All rights reserved.
          </div>
          <div className="footer__copyright__right">
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
