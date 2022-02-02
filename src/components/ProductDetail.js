import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import "../App.css";

import axios from "axios";

const ProductDetail = () => {
  // const [item, setItem] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);

  const fetchSingleProduct = async () => {
    const { data } = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
    // setItem(data);
    dispatch(selectedProduct(data));
  };

  
    const {  title,image, description,price, category } = product;
  

  useEffect(() => {
    if (productId && productId !== "") fetchSingleProduct();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div className="ui grid container"> 
    {Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
      <div className="ui placeholder segment">
      <div className="ui vertical divider">And</div>
      <div className="middle aligned row">
        <div className="column lp">
          <img className="ui fluid image" src={image} alt={title} />
        </div>
        <div className="column rp">
          <h1></h1>
          <h2>
            <a className="ui teal tag label">#{price}</a>
          </h2>
          <h3 className="ui brown block header">{category}</h3>
          <p>{description}</p>
          <div className="ui vertical animated button" tabIndex="0">
            <div className="hidden content">
              <i className="shop icon"></i>
            </div>
            <div className="visible content">Add To Cart</div>
          </div>
        </div>
      </div>
    </div>
    )}
    
  
      <button
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Back to home Page
      </button>
    </div>
  );
};

export default ProductDetail;
