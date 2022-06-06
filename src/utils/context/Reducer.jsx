const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTERED_EMPLOYEES":
      return { ...state, filteredEmployees: action.filteredEmployees };
    default:
      return state;
  }
};

export default reducer;
