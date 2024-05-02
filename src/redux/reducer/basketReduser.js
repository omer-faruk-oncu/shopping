import {ADD,CLR,PLS,MNS,REMOVE} from "../type/basketType"



const initialState = {
    basket:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return { basket:[...state.basket,({...payload,quantitiy:1})] }// adedi attırıken en başta adet gelmediği için default olarak verildi. 
    case CLR:
      return initialState;
    case PLS:
      return {
      basket:state.basket.map((item)=>
      item.id === payload ? {...item,quantitiy:item.quantitiy+1} : item)
      }
    case MNS:
      return {
        basket:state.basket.map((item)=>
      item.id === payload ? {...item,quantitiy:item.quantitiy-1} : item)
      }
      case REMOVE:
        return {
          basket:state.basket.filter(item=>item.id !== payload )
        }
  default:
    return state
  }
}