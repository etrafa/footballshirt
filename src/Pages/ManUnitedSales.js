import "./ShirtSales.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import manUnitedFront from "./manunited-asset/manunited-front.png";
import manUnitedBack from "./manunited-asset/manunited-back.png";
import manUnitedFrontSmall from "./manunited-asset/manunited-front-small.png";
import manUnitedBackSmall from "./manunited-asset/manunited-back-small.png";

const ManUnitedSales = () => {
  const [image, setImage] = useState(manUnitedFront);
  const [cartText, setCartText] = useState("Add to Cart");
  const [wishColor, setWishColor] = useState(true);
  const [tshirtSize, setTshirtSize] = useState(" ");
  const [tshirtName, setTshirtName] = useState("");
  const [tshirtNumber, setTshirtNumber] = useState("");
  const handleWishColor = () => {
    setWishColor(!wishColor);
  };

  const addCartHandler = (e) => {
    setCartText("Added ✓");
    e.preventDefault();
    console.log(tshirtSize, tshirtName, tshirtNumber);
  };

  return (
    <div className="shirtSales__container">
      <img className="mainShirt__front" src={image} alt="" />
      <div className="mainShirt__small">
        <img
          src={manUnitedFrontSmall}
          onClick={() => setImage(manUnitedFront)}
          alt=""
        />
        <img
          src={manUnitedBackSmall}
          onClick={() => setImage(manUnitedBack)}
          alt=""
        />
      </div>
      <h1>MANCHSTER UNITED HOME FOOTBALL SHIRT 21/22</h1>
      <hr />
      <div className="shirtSales__price__container">
        <p className="shirtSales__price">$50.00</p>
        <p className="in__stock">In Stock</p>
      </div>
      <hr className="price__hr" />
      <div className="user__star">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <hr className="user__star__hr" />
      <div className="size__chart">
        <a href="#">
          <p>Size Chart</p>
        </a>
        <a href="#">
          <p>Have a Question?</p>
        </a>
      </div>
      <hr className="size__chart__hr" />
      <div className="shipping__information">
        <ul>
          <li>Ship out within 1-3 business days.</li>
          <li>
            Shipping Time: DHL/Fedex (5-15 business days) | International mail
            (10-40 business days)
          </li>
        </ul>
      </div>
      <form>
        <div className="tshirtSales__additional__parts">
          <div className="tshirt__size">
            <label htmlFor="size">
              <span>*</span>Size
            </label>
            <select
              onChange={(e) => {
                setTshirtSize(e.target.value);
              }}
              value={tshirtSize}
              name="size"
              id="size"
            >
              <option value="#" selected>
                -- Please Select --
              </option>
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="xLarge">XL</option>
              <option value="2xLarge">2XL</option>
            </select>
          </div>
          <div className="tshirt__name">
            <label htmlFor="name">
              Name<span> +$3.00</span>
            </label>
            <input
              type="text"
              name="name"
              value={tshirtName}
              onChange={(e) => setTshirtName(e.target.value)}
              id="name"
            />
          </div>
          <div className="tshirt__number">
            <label htmlFor="name">
              Number <span>+$3.00</span>
            </label>
            <input
              type="text"
              name="number"
              value={tshirtNumber}
              onChange={(e) => setTshirtNumber(e.target.value)}
              id="number"
            />
          </div>
          <p>* Required Fields</p>
        </div>
        <div className="heart__icon">
          <div className="add__to__wishlist">
            <span
              className={
                wishColor ? "add__to__wishlist-color" : "add__to__wishlist-red"
              }
              onClick={handleWishColor}
            >
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <h4 onClick={handleWishColor}>Add To Wishlist</h4>
          </div>
          <button type="submit" onClick={addCartHandler}>
            {cartText}
          </button>
        </div>
      </form>
      <div className="thirt__description">
        <h1>DESCRIPTION</h1>
        <hr />
        <div className="tshirt__features">
          <div className="tshirt__list">
            <p>&gt; 2021-2022</p>
            <p>&gt; Men</p>
            <p>&gt; Short sleeves</p>
            <p>&gt; Breathable technology</p>
            <p>&gt; Club crest</p>
            <p>&gt; Shirt sponsor</p>
            <p>&gt; 100% Polyester</p>
          </div>
          <p className="tshirt__description__text">
            <span>Customize your jerseys: </span>In the options above you can
            also choose to customize this jersey with a name and number of your
            choice which is applied in store using official League printing, we
            also have the option to add patches too! Make this Football Shirt
            your own by entering your details correctly before heading to the
            checkout. Our variety of international shipping methods will have
            your jersey in your hands in no time!
          </p>
          <img src={manUnitedFront} alt="" />
          <img src={manUnitedBack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ManUnitedSales;
