const errorHandler = (error, getState, lastAction, dispatch) => {
  console.error(error);
  console.debug("current state", getState());
  console.debug("last action was", lastAction);
};

export default errorHandler;
