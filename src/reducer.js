
export const initialState = {
  count: 0,
  color: "black",
  background: "white",
};

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + (action.payload || 1),
      };
    case "decrement":
      return {
        ...state,
        count: state.count - (action.payload || 1),
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "setColor":
      return {
        ...state,
        color: action.payload,
      };
    case "setBackground":
      return {
        ...state,
        background: action.payload,
      };
    default:
      return state;
  }
}
