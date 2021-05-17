export const getData = () => {
  return (dispatch, getState) => {
    console.log(getState());
    // dispatch({ type: "PLUS" });
    console.log(getState());
  };
};
