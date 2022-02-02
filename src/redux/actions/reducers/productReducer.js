import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.MENS_CLOTH:
      // return { ...state, products: payload.category === "men's clothing" };
    return { ...state, products: payload.filter((item) => item.category === "men's clothing")}
    // return state.filter((item)=> item.category===payload.category)
      case ActionTypes.WOMENS_CLOTH:
      return { ...state, products: payload.filter((item)=> item.category === "women's clothing") };
    case ActionTypes.ELECTRONICS:
      return { ...state, products: payload.filter((item)=> item.category === "electronics") };
    case ActionTypes.JEWELERY:
      return {...state, products: payload.filter((item)=> item.category === "jewelery")}  
    // case ActionTypes.SELECTED_PRODUCT:
    //   return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

// export const filteredProductsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ActionTypes.MENS_CLOTH:
//       return {
//         ...state,
//         products: payload,
//       };

//       break;

//     default:
//       break;
//   }
// };
