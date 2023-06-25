import React from 'react'
import "./service.scss";
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="service__flex">
        <div className="service">
            <div className="icon">
                <img src="/shipping.png" alt="shipping" />
            </div>
            <div className="text">
                <h2>Free Shipping</h2>
                <p>On Order over Rs.20000</p>
            </div>
        </div>
        <div className="service service__2">
            <div className="icon">
                <Link to={"/contact"}><img src="/cs.png" alt="cs" /></Link> 
            </div>
            <div className="text">
                <h2>Contact Us</h2>
                <p>We are 24*7 Here</p>
            </div>
        </div>
        <div className="service service__3">
            <div className="icon">
                <img src="/money.png" alt="money" />
            </div>
            <div className="text">
                <h2>MoneyBack Gaurentee</h2>
                <p>10 Days MoneyBack Gaurente</p>
            </div>
        </div>
    </div>
  )
}

export default Service