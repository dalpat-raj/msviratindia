import React, { Fragment, useEffect } from 'react';
import {CgMouse} from "react-icons/cg";
import "./Home.scss";
import ProductCard from "./ProductCard.js";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/loader/Loader';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'animate.css';
import Gallery from './Gallery';
import Work from './Work';
import Service from './Service';
import {HiArrowNarrowUp} from "react-icons/hi"


const Home = () => {

    const dispatch = useDispatch();
    const { loading, products } = useSelector((state)=>state.products)

    useEffect(()=>{
        dispatch(getProduct());
    }, [dispatch]);

  return (
    <Fragment>
    { loading ? (
        <Loader/>
    ) : 
    <div className='container__fluid' id='scroll'>
      
        <Carousel autoPlay={true} infiniteLoop={true} showIndicators={true} showStatus={false} transitionTime={"2000"}>
            <div className="home__main" >
                <div className="col__2">
                    <h2>Coffee Table<br/>Heavy Duty</h2>
                    <p>MS Virat India is India’s upcoming leading furniture Brand.<br/> We offer you new generation T-Table, Modern railing,<br/> Attractive and Luxirous Hinges, and many more products.<br/> Kindly Take a look of our site</p>
                    <a href='#container'>
                        <button className='btn'>
                        Scroll <CgMouse/>
                        </button>
                    </a>
                </div>
                <div className="col__2">
                    <img className="animate__animated animate__bounce" src="/h1.png" alt="" />
                </div>
            </div>
            <div className="home__main">
                <div className="col__2">
                <h2>Coffee Table<br/>Heavy Duty</h2>
                    <p>Incididunt ut labore et dolore magna aliqua quis<br/> ipsum
                    suspendisse ultrices gravida. Risus<br/> commodo viverra</p>
                    <a href='#container'>
                        <button className='btn'>
                        Scroll <CgMouse/>
                        </button>
                    </a>
                </div>
                <div className="col__2">
                    <img src="/s4.png" alt="" />
                </div>
            </div>
            <div className="home__main">
                <div className="col__2">
                    <h2>Decore Our<br/>Home</h2>
                    <p>Incididunt ut labore et dolore magna aliqua quis<br/> ipsum
                    suspendisse ultrices gravida. Risus<br/> commodo viverra</p>
                    <a href='#container'>
                        <button className='btn'>
                        Scroll <CgMouse/>
                        </button>
                    </a>
                </div>
                <div className="col__2">
                    <img src="/h3.png" alt="" />
                </div>
            </div>
        </Carousel>
           
        <div className="gellery__section">
            <Gallery/>
        </div>

        <div className="product__show">
            <h2 className='homeHeading'>Products</h2>
            
            <div className="container__prod" id="container">
                {
                    products && products.map(product=>(
                        <ProductCard product={product} key={product._id} />
                    ))
                }
            </div>
        </div>

        <div className="service__section">
            <Service/>
        </div>

        <div className="work__section">
            <Work/>
        </div>

        <div className="scroll__section">
            <a href="#scroll"><HiArrowNarrowUp/></a>
        </div>
        

    </div>}
    </Fragment>
    )
    }

export default Home
