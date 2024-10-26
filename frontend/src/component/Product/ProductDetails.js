import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import ReviewCard from "./ReviewCard";
import Loader from "../layout/loader/Loader";
import { addItemsToCart } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import {BiRightArrow} from "react-icons/bi"
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
 

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [ moreDetails, setMoredetails] = useState(false)

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, reviewError, success]);




  const [showactive, setShowactive] = useState(true)

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="ProductDetails container__fluid">
            <div className="images">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div className="information">
              <div className="login_signUp_toggle">
              <p 
              onClick={()=>setShowactive(true)}
              >Description</p>
              <p 
              onClick={()=>setShowactive(false)}
              >Specification</p>
              </div>
                  
              {
                showactive ? (
                  <div className="details__all Description">
                <div className="detailsBlock-1">
                  <h2>{product.name}</h2>
                  
                </div>
                <div className="detailsBlock-2">
                  <Rating {...options} />
                  <span className="detailsBlock-2-span">
                    ({product.numOfReviews} Reviews)
                  </span>
                </div>
                <div className="detailsBlock-3">
                  <h1>{`₹ ${product.price}`}</h1>
                  <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                      <button onClick={decreaseQuantity}>-</button>
                      <input readOnly type="number" value={quantity} />
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="btn add__cart__btn"
                      disabled={product.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>

                  <p>
                    Status : 
                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                      {product.Stock < 1 ? " OutOfStock" : " InStock"}
                    </b>
                  </p>
                </div>

                <div className="detailsBlock-4">
                  Description : <p>{product.description}</p>
                </div>

                <button onClick={submitReviewToggle} className="submitReview btn">
                  Submit Review
                </button>
              </div>
                ) : (
                  <div className="Specification">
                <div className="highlight">
                  <h2>Highlight</h2>
                  <table>
                    <tr>
                      <td>size</td>
                      <td>{product.size}</td>
                    </tr>
                    <tr>
                      <td>weight</td>
                      <td>{product.weight}</td>
                    </tr>
                  </table>
                </div>
                <div className="specification">
                  <h2>Specification</h2>
                  <table>
                    <tr>
                      <td>In The Box</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Sales Package</td>
                      <td>{product.SalesPackage}</td>
                    </tr>
                    <tr>
                      <td>General</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td>{product.Brand}</td>
                    </tr>
                  </table>
                </div>
                <div className="more__details">
                  <h2 onClick={()=>setMoredetails(true)}>More Details <BiRightArrow/></h2>
                  <table className={moreDetails ? "table__show" : "table__hide"}>
                    <tr>
                      <td>Model Number</td>
                      <td>{product.ModelNumber}</td>
                    </tr>
                    <tr>
                      <td>Finish Color</td>
                      <td>{product.FinishColor}</td>
                    </tr>
                    <tr>
                      <td>Table Top Material Subtype</td>
                      <td>{product.TableFrameMaterialSubtype}</td>
                    </tr>
                    <tr>
                      <td>Table Top Material</td>
                      <td>{product.TableTopMaterial}</td>
                    </tr>
                    <tr>
                      <td>Primary Color</td>
                      <td>{product.PrimaryColor}</td>
                    </tr>
                    <tr>
                      <td>Table Frame Material</td>
                      <td>{product.TableFrameMaterial}</td>
                    </tr>
                    <tr>
                      <td>Table Frame Material Subtype</td>
                      <td>{product.TableFrameMaterialSubtype}</td>
                    </tr>
                    <tr>
                      <td>Storage Included</td>
                      <td>{product.StorageIncluded}</td>
                    </tr>
                    <tr>
                      <td>Delivery Condition</td>
                      <td>{product.DeliveryCondition}</td>
                    </tr>
                    <tr>
                      <td>Care Instructions</td>
                      <td>{product.CareInstructions}</td>
                    </tr>
                    <tr>
                      <td>Style</td>
                      <td>{product.Style}</td>
                    </tr>
                    <tr>
                      <td>Model Series Name</td>
                      <td>{product.ModelSeriesName}</td>
                    </tr>
                    <tr>
                      <td>Table Shape</td>
                      <td>{product.TableShape}</td>
                    </tr>
                    <tr>
                      <td>Material </td>
                      <td>{product.Material}</td>
                    </tr>
                    <tr>
                      <td>table safety </td>
                      <td>{product.Tablesafety}</td>
                    </tr>
                  </table>
                </div>
                <div className="dimensions">
                  <h2>dimensions</h2>
                  <table>
                    <tr>
                      <td>size</td>
                      <td>{product.size}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>{product.Height}</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>{product.weight}</td>
                    </tr>
                    <tr>
                      <td>packaging weight</td>
                      <td>{product.packagingweight}</td>
                    </tr>
                  </table>
                </div>
              </div>)
              }
            </div>

          
          

          </div>



         


          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog ">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          

            <div className="container__fluid review__container">
              <h3 className="reviewsHeading">REVIEWS</h3>
              
              {product.reviews && product.reviews[0] ? (
                <div className="reviews">
                  {product.reviews &&
                    product.reviews.map((review) => (
                      <ReviewCard key={review._id} review={review} />
                    ))}
                </div>
              ) : (
                <p className="noReviews">No Reviews Yet</p>
              )}
            </div>
          
          
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
