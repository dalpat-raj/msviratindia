import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss";
import {AiOutlineShoppingCart, AiOutlineMenuUnfold} from "react-icons/ai";
import { useSelector } from "react-redux";
import {BiSearch} from "react-icons/bi"
import {CgClose} from "react-icons/cg";
import {FaUser} from "react-icons/fa";

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const [showmenu, setShowmenu] = useState(false);
    

  return (
        <div className='container__fluid'>
        <div className="navbar">
            <div className='menubar'>
                {
                    showmenu ? <div className="close__menu__icon">
                    <CgClose onClick={()=>setShowmenu(false)} />
                    </div> : <div className="show__menu__icon">
                    <AiOutlineMenuUnfold onClick={()=>setShowmenu(true)} />
                    </div>
                }
                
                
            </div>
            <div className="logo">
                <Link to={"/"}><img src='/logo.png' alt='msviratlogo'/></Link> 
            </div>
            <div className={showmenu ? "show__menu" : "hide__menu"} onClick={()=>setShowmenu(false)}>
                <ul>
                    <Link to={"/products"}><li>Product</li></Link>
                    <div className="dropdown">
                    <button className="dropbtn">Categories</button>
                        <div className="dropdown-content">
                            <Link to={"/product"}><li>wheel Table</li></Link>
                            <Link to={"/product"}><li>No Wheel Table</li></Link>
                            <Link to={"/product"}><li>Hinges</li></Link>
                            <Link to={"/product"}><li>Railing</li></Link>
                            <Link to={"/product"}><li>Catelog</li></Link>
                        </div>
                    </div>
                    <Link to={"/about"}><li>About</li></Link>
                    <Link to={"/contact"}><li>Contact</li></Link>
                    <Link to={"/cart"}><li className='cart__icon'><AiOutlineShoppingCart/><span>{ cartItems ? cartItems.length : 0 }</span></li></Link>
                    <Link to={"/search"}><li className='search__icon'><BiSearch/></li></Link>
                    <Link to={"/login"}><li><FaUser/></li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header