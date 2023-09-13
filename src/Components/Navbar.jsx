import React from "react";
import image1 from "../Assets/F.svg";
import image2 from "../Assets/oodi.svg";
import image3 from "../Assets/Group 2.png";
import image4 from "../Assets/🦆 icon _search_ (2).svg"
import image5 from "../Assets/fi-rr-shopping-bag (1).svg"
import image6 from "../Assets/fi-rr-phone-call.svg"
// import image

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={image1} alt="" className="logo1" />
          <img src={image2} alt="" className="logo2" />
        </div>

        <div className="links" >
          <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Offers</a></li>
          </ul>
        </div>
        <div className="icons">
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>

        <div>
          <button className="button1">
            <img src={image6} alt="" />
            Contact
          </button>
        </div>

      </div>
    </>
  );
};

export default Navbar;
