import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import artistReducer from "./artistReducer";
import surveysReducer from "./surveysReducer";
import songReducer from "./songReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  song: songReducer,
  artist: artistReducer
});
