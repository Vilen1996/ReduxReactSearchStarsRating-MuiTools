import initialState from "./state";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_RATING":
      return {
        ...state,
        medicine: state.medicine.map((item) =>
          item.id === action.payload.id
            ? { ...item, stars: action.payload.stars }
            : item
        ),
      };

    case "UPDATE_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
