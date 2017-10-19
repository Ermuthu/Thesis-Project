const errorHandler = (error, fetchFailed, getState, lastAction, dispatch) => {
  console.error(error);
  console.debug("current state", getState());
  console.debug("last action was", lastAction);
  dispatch(fetchFailed(error));
};

export default errorHandler;
