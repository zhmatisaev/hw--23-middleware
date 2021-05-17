export const LOAD_START = "LOAD_START";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";

export const load_posts = () => {
  return (dispatch) => {
    //   start
    dispatch(load_start());

    // loading
    fetch("https://jsonplaceholder.typicode.com/posts/?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        //   success case
        dispatch(load_success(json));
        console.log(json);
      })
      .catch((error) => {
        //   error case
        dispatch(load_fail("Ошибка загрузки"));
      });
  };
};

export const load_start = () => ({
  type: LOAD_START,
});

export const load_success = (posts) => ({
  type: LOAD_SUCCESS,
  payload: posts,
});

export const load_fail = (error) => ({
  type: LOAD_FAIL,
  payload: error,
});
