import "../Pages/ShirtSales.css";
import "../checkout.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import manUnitedFront from "./bestSellers-asset/manUnitedFront.png";
import manUnitedBack from "./bestSellers-asset/manUnitedBack.png";
import manUnitedFrontSmall from "./bestSellers-asset/manUnitedFrontSmall.png";
import manUnitedBackSmall from "./bestSellers-asset/manUnitedBackSmall.png";
import closeImage from "../Pages/asset/close.png";

const ManUnitedTshirtHome = () => {
  const [checkout, setCheckout] = useState(false);
  const [image, setImage] = useState(manUnitedFront);
  const [wishColor, setWishColor] = useState(true);
  const [tshirtSize, setTshirtSize] = useState("-");
  const [tshirtName, setTshirtName] = useState("");
  const [tshirtNumber, setTshirtNumber] = useState("");
  const [price, setPrice] = useState(50);
  const handleWishColor = () => {
    setWishColor(!wishColor);
  };

  const closeCheckout = () => {
    setCheckout(!checkout);
  };

  const buyHandler = (e) => {
    e.preventDefault();
    if (tshirtSize === "-") alert("Please select your size.");
    else {
      setCheckout(!checkout);
    }
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
      <h1>MANCHESTER UNITED HOME FOOTBALL SHIRT 21/22</h1>
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
        <p>
          <Link to={"/size-chart"}>Size Chart</Link>
        </p>
        <p>
          <Link to={"/faq-help"}>Have a Question?</Link>
        </p>
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
              <option value="-" defaultChecked>
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
          <button onClick={buyHandler} type="submit">
            Buy
          </button>
        </div>
      </form>

      <div id="checkout-section">
        <div className={checkout ? "checkout" : "checkout-active"}>
          <div className="checkout-header">
            <h2>Product Details</h2>
            <img onClick={closeCheckout} src={closeImage} alt="" />
          </div>
          <div className="product-details">
            <label htmlFor="productSize">Size</label>
            <input disabled placeholder={tshirtSize} />
            <label htmlFor="productName">Name on Shirt</label>
            <input disabled placeholder={tshirtName || "-"} />
            <label htmlFor="productNumber">Number on Shirt</label>
            <input disabled placeholder={tshirtNumber || "-"} />
          </div>
          <h2>Billing Details</h2>
          <div class="checkout-name">
            <label for="name">Full name</label>
            <input type="text" />
          </div>
          <div class="checkout-email">
            <label for="email">E-mail address</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div class="checkout-country">
            <label for="email">Country</label>
            <select name="" id="">
              <option value="" disabled selected>
                Select Country
              </option>
              <option value="">United States of America</option>
              <option value="">Canada</option>
              <option value="">Belgium</option>
              <option value="">Netherlands</option>
              <option value="">Australia</option>
              <option value="">South Korea</option>
              <option value="">Germany</option>
              <option value="">France</option>
              <option value="">New Zealand</option>
              <option value="">Japan</option>
            </select>
          </div>
          <div class="checkout-address">
            <label for="state">Address</label>
            <input type="text" />
          </div>
          <div class="checkout-state">
            <label for="state">State/County</label>
            <input type="text" />
          </div>
          <div class="checkout-zipcode">
            <label for="state">Zip/postal code</label>
            <input type="text" />
          </div>
          <h2>Payment Method</h2>
          <div class="checkout-card">
            <label for="">Card Number</label>
            <input
              type="number"
              placeholder="1234 5678 9152 2000"
              maxlength="16"
            />
          </div>
          <div class="checkout-expiration">
            <label for="">Expiration date</label>
            <div class="expiration-date-container">
              <select name="" id="">
                <option value="" selected disabled>
                  Month
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>
              <select name="" id="">
                <option value="" selected disabled>
                  Year
                </option>
                <option value="">22</option>
                <option value="">23</option>
                <option value="">24</option>
                <option value="">25</option>
                <option value="">26</option>
                <option value="">27</option>
                <option value="">28</option>
                <option value="">29</option>
                <option value="">30</option>
              </select>
            </div>
            <label for="">CVC</label>
            <input type="text" placeholder="123" maxlength="3" />
          </div>
          <button
            onClick={() => {
              setPrice("Bought");
            }}
            class="checkout-buy"
          >{`$ ${price}`}</button>
        </div>
      </div>

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
export default ManUnitedTshirtHome;
