import "./Navbar.css";
import logo from "./logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isActive, setActive] = useState("false");
  const [cartItem, setCartItem] = useState(0);
  const [searchBar, setSearchBar] = useState(false);
  const [shoppingCartActive, setShoppingCartActive] = useState(false);
  const [cartMessage, setCartMessage] = useState("Your cart is empty.");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const searchBarToggle = () => {
    setSearchBar(!searchBar);
  };

  const shoppingCartToggle = () => {
    setShoppingCartActive(!shoppingCartActive);
  };

  return (
    <>
      <div className="header__container">
        <div
          className={
            isActive
              ? "hamburger__menu__content__deactive"
              : "hamburger__menu__content"
          }
        >
          <FontAwesomeIcon
            className={isActive ? "windowClose__icon" : "windowClose__icon"}
            onClick={handleToggle}
            icon={faWindowClose}
          ></FontAwesomeIcon>
          <Link to={"/footballshirt"}>HOME</Link>
          <hr />
          <Link to={"./national-team"}>NATIONAL TEAM</Link>
          <hr />
          <Link to={"./premier-leauge"}>PREMIER LEAUGE</Link>
          <hr />
          <Link to={"./bundesliga"}>BUNDESLIGA</Link>
          <hr />
          <Link to={"./laliga-leauge"}>LA LIGA</Link>
          <hr />
          <Link to={"./ligue-one"}>LIGUE 1</Link>
          <hr />
          <Link to={"./other-clubs"}>OTHER CLUBS</Link>
          <hr />
        </div>
        <FontAwesomeIcon
          className="hamburgerMenu__icon"
          onClick={handleToggle}
          icon={faBars}
        ></FontAwesomeIcon>
        <div className="header__container__right">
          <input
            type="text"
            placeholder="Search"
            className={
              searchBar ? "searchBar__text" : "searchBar__text-deactive"
            }
          />
          <FontAwesomeIcon
            className="searchBar__icon"
            icon={faSearch}
            onClick={searchBarToggle}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="user__icon"
            icon={faUser}
          ></FontAwesomeIcon>
          <div className="shoppingCart__container">
            <FontAwesomeIcon
              className="shoppingCart__icon"
              icon={faShoppingCart}
              onClick={shoppingCartToggle}
            ></FontAwesomeIcon>
            <p className="shoppingCart__item">{cartItem}</p>
          </div>
        </div>
      </div>
      <div
        className={
          shoppingCartActive
            ? "shoppingCart__modal"
            : "shoppingCart__modal-deactive"
        }
      >
        <p>{cartMessage}</p>
      </div>
      <div className="logo">
        <Link to={"/footballshirt"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to={"/footballshirt"}>HOME</Link>
        <Link to={"./national-team"}>NATIONAL TEAM</Link>
        <Link to={"./premier-leauge"}>PREMIER LEAUGE</Link>
        <Link to={"./bundesliga"}>BUNDESLIGA</Link>
        <Link to={"./laliga-leauge"}>LA LIGA</Link>
        <Link to={"./ligue-one"}>LIGUE 1</Link>
        <Link to={"./other-clubs"}>OTHER CLUBS</Link>
      </div>
    </>
  );
};

export default Navbar;
