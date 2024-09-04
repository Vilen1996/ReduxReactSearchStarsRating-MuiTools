export const updateRating = (id, stars) => {
  return {
    type: "UPDATE_RATING",
    payload: { id, stars },
  };
};

export const updateSearchTerm = (term) => ({
  type: "UPDATE_SEARCH_TERM",
  payload: term,
});
