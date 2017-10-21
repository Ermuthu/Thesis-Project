import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import { createLogger } from "redux-logger";
import throttling from "./middleware/throttle";
import spotifyMiddleware from "./middleware/spotify";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const persistedState = loadState();
  const logger = createLogger();
  const middleware = composeEnhancers(
    applyMiddleware(thunk, throttling, logger, spotifyMiddleware)
  );
  const store = createStore(reducers, persistedState, middleware);

  store.subscribe(
    throttle(() => {
      saveState({
        auth: store.getState().auth
      });
    }, 1000)
  );

  return store;
};

window.store = configureStore;

export default configureStore;
