import {ADD,CLR,PLS,MNS,REMOVE} from "../type/basketType"
export const addBasket = (payload) => ({
  type: ADD,
  payload:payload,
})
export const clearBAsket=()=>({
    type:CLR
})
export const plusBasket = (id) => ({
  type: PLS,
  payload:id
})
export const minusBasket = (id) => ({
  type: MNS,
  payload:id
})
export const removeProduct = (id) => ({
  type: REMOVE,
  payload:id
})