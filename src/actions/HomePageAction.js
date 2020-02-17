import {
  TOGGLE_SIDE_MENU,
  ON_DIMENSION_CHANGE,
  ON_LOAD_COMPLETE
} from "./types";

export const toggleSideMenu = prevState => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SIDE_MENU,
      payload: !prevState
    });
  };
};

export const onDimensionChange = dimension => {
  return dispatch => {
    dispatch({ type: ON_DIMENSION_CHANGE, payload: dimension });
  };
};
export const onLoadComplete = () => {
  return dispatch => {
    dispatch({ type: ON_LOAD_COMPLETE });
  };
};
