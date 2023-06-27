const reducer = (state, action) => {
  if (action.type === "ON_LOAD") {
    return { ...state, news: action.payload.articles };
  }
  if (action.type === "ON_CHANGE") {
    // console.log(action.payload.term);
    return { ...state, searchTerm: action.payload.term };
  }
  if (action.type === "SUBMIT") {
    return { ...state, searchValue: state.searchTerm };
  }
  return state;
};
export default reducer;
