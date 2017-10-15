export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    // console.log(sessionStorage.accessToken);
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
    // console.log(serializedState);
    // console.log(state.auth.accessToken);
    sessionStorage.setItem("accessToken", state.auth.accessToken);
  } catch (err) {}
};

export const removeState = state => {
  sessionStorage.removeItem(state);
};
