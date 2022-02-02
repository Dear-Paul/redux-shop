// import React, { useState } from "react";
import "../App.css";

const Header = ({setCategory}) => {


//   const handleCategorySelection = (e) => {
//       const option = e.target.value;
//       setCategory(option);
//   };

  return (
    <div className="ui fixed menu">
      <div className="ui container center ">
        <h1>Shop</h1>
      </div>
   
      <select className="point" onChange={(e)=> setCategory(e.target.value) } name="todos" className="filter-todo">
        <option  value="all">All</option>
        <option value="men">Men category</option>
        <option value="women">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
      </select>
    </div>
  );
};

export default Header;
