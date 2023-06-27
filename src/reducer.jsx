const reducer = (state, action) => {
  if (action.type === "ON_LOAD") {
    return { ...state, news: action.payload.articles };
  }
  return state;
};
export default reducer;
