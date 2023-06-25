import React from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";
// import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  // const options = {
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };
  return (
    <Link className="productCard" to={`/productt/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p className="name">{product.name}</p>
      <span className="price">{`₹ ${product.price}`}</span>
      <p className="details">Buy Now</p>
    </Link>
  );
};

export default ProductCard;
