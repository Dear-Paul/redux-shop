import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import "../App.css";
import { Link } from "react-router-dom";


const Product = () => {
  let products = []
    useSelector(
    (state) => {
      console.log(state)
      products = state.allProducts.products;
      console.log(products)
     return state.allProducts.products},
    shallowEqual
  );


  const dispatch = useDispatch();

  useEffect(()=>{
   
    console.log(`products: ${products}`)
  },[])

  
 
  const renderList = products?.map((product) => {
  
    const { id, title, image, category, price } = product;
    // let items = products.filter((item)=> {return item.category==="jewelery"})
    // console.log(items)
    // console.log(category);
    return (
      <div className="container" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards" >
            <div className="card">
              <div className="img">
                <img
                  src={image}
                  alt={title}
                  width="100%"
                  height="100%"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />
              </div>
              <div className="content" style={{ marginTop: "15px" }}>
                <div className="header">{title} </div>
                <div className="meta price"> $ {price} </div>
                <div className="category">{category} </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

 

  //   console.log(products);
  return <>{renderList}</>;
};

export default Product;
