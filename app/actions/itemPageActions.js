import * as types from '../constants/index';

export function addLike(category, itemName) {
  return {type: types.ADD_LIKE, category, itemName};
}

export function getProduct(category, productName) {
  return {type: types.GET_PRODUCT, payload: {category, productName}};
}