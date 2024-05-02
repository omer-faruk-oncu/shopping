import { legacy_createStore as createStore  } from "redux"
import basketReduser from "./reducer/basketReduser"
export const store=createStore(basketReduser)