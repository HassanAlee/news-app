const reducer = (state, action) => {
  if (action.type === "ON_LOAD") {
    console.log(action.payload.articles);
    return { ...state, news: action.payload.articles };
  }
  return state;
};
export default reducer;
