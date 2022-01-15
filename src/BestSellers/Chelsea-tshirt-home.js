import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import chelseaFront from "./bestSellers-asset/chelseaFront.jpg";
import chelseaBack from "./bestSellers-asset/chelseaBack.jpg";
import chelseaFrontSmall from "./bestSellers-asset/chelseaFrontSmall.jpg";
import chelseaBackSmall from "./bestSellers-asset/chelseaBackSmall.jpg";
import "../Pages/ShirtSales.css";

const ChelseaTshirtHome = () => {
  const [image, setImage] = useState(chelseaFront);

  return (
    <div className="shirtSales__container">
      <img className="mainShirt__front" src={image} alt="" />
      <div className="mainShirt__small">
        <img
          src={chelseaFrontSmall}
          onClick={() => setImage(chelseaFront)}
          alt=""
        />
        <img
          src={chelseaBackSmall}
          onClick={() => setImage(chelseaBack)}
          alt=""
        />
      </div>
      <h1>CHELSEA HOME FOOTBALL SHIRT 21/22</h1>
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
      <div className="tshirtSales__additional__parts">
        <div className="tshirt__size">
          <label htmlFor="size">
            <span>*</span>Size
          </label>
          <select name="size" id="size">
            <option value="#" selected disabled>
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
          <input type="text" name="name" id="name" />
        </div>
        <div className="tshirt__number">
          <label htmlFor="name">
            Number <span>+$3.00</span>
          </label>
          <input type="text" name="number" id="number" />
        </div>
        <p>* Required Fields</p>
      </div>
      <button>Add to Cart</button>
      <div className="heart__icon">
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <h4>ADD TO WISHLIST</h4>
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
          <img src={chelseaFront} alt="" />
          <img src={chelseaBack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChelseaTshirtHome;
