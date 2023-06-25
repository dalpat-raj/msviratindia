import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { Button } from "@material-ui/core";
import SideBar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [ size, setSize ] = useState("");
  const [ weight, setWeight ] = useState("");
  const [SalesPackage , setSalesPackage ] = useState("");
  const [ Brand, setBrand ] = useState("");
  const [ ModelNumber, setModelNumber ] = useState("");
  const [ FinishColor, setFinishColor ] = useState("");
  const [TableTopMaterialSubtype, setTableTopMaterialSubtype ] = useState("");
  const [ TableTopMaterial, setTableTopMaterial ] = useState("");
  const [ PrimaryColor, setPrimaryColor ] = useState("");
  const [ TableFrameMaterial, setTableFrameMaterial] = useState("");
  const [ TableFrameMaterialSubtype, setTableFrameMaterialSubtype ] = useState("");
  const [ StorageIncluded, setStorageIncluded ] = useState("");
  const [ DeliveryCondition, setDeliveryCondition] = useState("");
  const [ CareInstructions, setCareInstructions ] = useState("");
  const [ Style, setStyle ] = useState("");
  const [ ModelSeriesName, setModelSeriesName ] = useState("");
  const [ TableShape, setTableShape ] = useState("");
  const [ Material, setMaterial ] = useState("");
  const [ Tablesafety, setTablesafety ] = useState("");
  const [ Height, setHeight] = useState("");
  const [ packagingweight, setpackagingweight ] = useState("");


  const categories = [
    "wheel Table",
    "No Wheel Table",
    "Hinges",
    "Railing",
    "Catelog",
    "Home Decore",
    "chair",
  ];

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Product Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);
    
    myForm.set("size", size);
    myForm.set("weight", weight);
  
    myForm.set("SalesPackage", SalesPackage);
    myForm.set("Brand", Brand);

    myForm.set("ModelNumber", ModelNumber);
    myForm.set("FinishColor", FinishColor);
    myForm.set("TableTopMaterialSubtype", TableTopMaterialSubtype);
    myForm.set("TableTopMaterial", TableTopMaterial);
    myForm.set("PrimaryColor", PrimaryColor);
    myForm.set("TableFrameMaterial", TableFrameMaterial);
    myForm.set("TableFrameMaterialSubtype", TableFrameMaterialSubtype);
    myForm.set("StorageIncluded", StorageIncluded);
    myForm.set("DeliveryCondition", DeliveryCondition);
    myForm.set("CareInstructions", CareInstructions);
    myForm.set("Style", Style);
    myForm.set("ModelSeriesName", ModelSeriesName);
    myForm.set("TableShape", TableShape);
    myForm.set("Material", Material);
    myForm.set("Tablesafety", Tablesafety);

    myForm.set("Height", Height);
    myForm.set("packagingweight", packagingweight);
    
    
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
        <h1>Create Product</h1>
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
            >

            <div>
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
                />
            </div>


            {/* all Details start */}
            <div>
              <input
                placeholder="Size"
                required
                onChange={(e) => setSize(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Weight, "
                required
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Sales Package"
                required
                onChange={(e) => setSalesPackage(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Brand"
                required
                onChange={(e) => setBrand(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="ModelNumber"
                required
                onChange={(e) => setModelNumber(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="FinishColor"
                required
                onChange={(e) => setFinishColor(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Table Top Material Subtype"
                required
                onChange={(e) => setTableTopMaterialSubtype(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Table Top Material"
                required
                onChange={(e) => setTableTopMaterial(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Primary Color"
                required
                onChange={(e) => setPrimaryColor(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Table Frame Material"
                required
                onChange={(e) => setTableFrameMaterial(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Table Frame Material Subtype"
                required
                onChange={(e) => setTableFrameMaterialSubtype(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Storage Included"
                required
                onChange={(e) => setStorageIncluded(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Delivery Condition"
                required
                onChange={(e) => setDeliveryCondition(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Care Instructions"
                required
                onChange={(e) => setCareInstructions(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Style"
                required
                onChange={(e) => setStyle(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Model Series Name"
                required
                onChange={(e) => setModelSeriesName(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Table Shape"
                required
                onChange={(e) => setTableShape(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Material"
                required
                onChange={(e) => setMaterial(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Table Safety"
                required
                onChange={(e) => setTablesafety(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="Height"
                required
                onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div>
              <input
                placeholder="packaging weight"
                required
                onChange={(e) => setpackagingweight(e.target.value)}
                />
            </div>
            {/* all Details end */}

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              className="btn"
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
