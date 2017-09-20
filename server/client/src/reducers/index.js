import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import artistReducer from "./artistReducer";
import songReducer from "./songReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  song: songReducer,
  artist: artistReducer
});
