import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_MULTIPLY,
  ADDITION,
  MULTIPLICATION,
  DIVISION,
  SUBSTRACTION,
} from "./action.types";
export const add = () => ({ type: COUNTER_INCREMENT });
export const sub = () => ({ type: COUNTER_DECREMENT });
export const mul = () => ({ type: COUNTER_MULTIPLY });
export const Add = (payload) => ({ type: ADDITION,payload });
export const Mult = (payload) => ({ type: MULTIPLICATION,payload });
export const Sub = (payload) => ({ type: SUBSTRACTION ,payload});
export const Div = (payload) => ({ type: DIVISION,payload });
