import React from 'react'
import "./gallery.scss";
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="grid">
        <div className='img__1'>
          <img src="/b1.jpg" alt="b1" />
          <div className='text'>
            <h2>Decore Your Home</h2>
            <p>Decore Your Home & Office With Our Beautiful Furniture</p>
            <Link to={"/products"}><button className='btn'>Buy Now</button></Link> 
          </div>
        </div>
        <div className='img__2'>
          <img src="/b2.jpg" alt="b2" />
          <div className='text'>
            <h2>Make a look of our Products</h2>
          </div>
        </div>
        <div className='img__3'>
          <img src="/b3.jpg" alt="b3" />
          <div className='text'>
            <h2>Best Quality work.</h2>
          </div>
        </div>
    </div>
  )
}

export default Gallery