const Counter = (
  state = {
    nb: 0
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        nb: state.nb + 1
      };

    case "DECREMENT":
      return {
        ...state,
        nb: state.nb - 1
      };

    default:
      return state;
  }
};
export default Counter;
