import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_MULTIPLY,
  ADDITION,
  MULTIPLICATION,
  DIVISION,
  SUBSTRACTION,
} from "./action.types";

export const reducer = (state, action) => {
  console.log(state, action);

  // return state;

  switch (action.type) {
    case COUNTER_INCREMENT: {
      state.count++;
      // state.count=state.count+action.payload;
      return { ...state };
    }
    case COUNTER_DECREMENT: {
      state.count--;
      //state.count=state.count-action.payload;
      return { ...state };
    }
    case COUNTER_MULTIPLY: {
      state.count = state.count * state.count;
      return { ...state };
    }
    case ADDITION: {
      state.count = state.count + Number(action.payload);
      return { ...state };
    }
    case MULTIPLICATION: {
      state.count = state.count * Number(action.payload);
      return { ...state };
    }
    case SUBSTRACTION: {
      state.count = state.count - Number(action.payload);
      return { ...state };
    }
    case DIVISION: {
      state.count = state.count / Number(action.payload);
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
