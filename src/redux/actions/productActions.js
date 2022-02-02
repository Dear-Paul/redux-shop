import { ActionTypes } from "./constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const menSelectedProduct = (filteredProducts) => {
  return {
    type: ActionTypes.MENS_CLOTH,
    payload: filteredProducts,
  };
};

export const womenSelectedProduct = (filteredProducts) => {
  return {
    type: ActionTypes.WOMENS_CLOTH,
    payload: filteredProducts,
  };
};

export const jewelerySelectedProduct = (filteredProducts) => {
  return {
    type: ActionTypes.JEWELERY,
    payload: filteredProducts,
  };
};

export const electronicsSelectedProduct = (filteredProducts) => {
  return {
    type: ActionTypes.ELECTRONICS,
    payload: filteredProducts,
  };
};


