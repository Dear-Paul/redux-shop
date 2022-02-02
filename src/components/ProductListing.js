import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setProducts,
  menSelectedProduct,
  womenSelectedProduct,
  electronicsSelectedProduct,
  jewelerySelectedProduct,
} from "../redux/actions/productActions";
import Product from "./Product";
import axios from "axios";
import "../App.css";

const ProductListing = ({ prodCat }) => {
  // const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const { data } = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });

    console.log(`prodCat : ${prodCat}`) ;
    // console.log(`data : ${data}`) 
    return prodCat === "jewelery"
      ? dispatch(jewelerySelectedProduct(data))
      : prodCat === "men"
      ? dispatch(menSelectedProduct(data))
      : prodCat === "women"
      ? dispatch(womenSelectedProduct(data))
      : prodCat === "electronics"
      ? dispatch(electronicsSelectedProduct(data))
      : dispatch(setProducts(data));

   
  };

  useEffect(() => {
    fetchProducts();
  }, [prodCat]);

  return (
    <div className="ui grid container colored">
      <Product />
    </div>
  );
};

export default ProductListing;
