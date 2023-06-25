import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__main">
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1><img src="/logo.png" alt="logofooter"/></h1>
        <h4>High Quality is our first priority</h4>
        <p>MS Virat India is India’s upcoming leading furniture Brand. We offer you new generation T-Table, Modern railing,Attractive and Luxirous Hinges, and many more products. Kindly Take a look of our site</p>
      </div>

      <div className="center__footer">
        <h2>For You</h2>
        <Link to={"/account"}><p>My account</p></Link>
        <Link to={"/orders"}><p>Orders</p></Link>
        <Link to={"/products"}><p>Shop Now</p></Link>
        <Link to={"/cart"}><p>Cart Items</p></Link>
        <Link to={"/contact"}><p>Contact</p></Link>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div>
    </footer>
    <p className="bottom__line">Copyrights 2023 &copy; MSVIRATINDIA | Devloping By Grach Technology</p>
    </div>
  );
};

export default Footer;
