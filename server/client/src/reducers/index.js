import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import authReducer from "./authReducer";
import spotifyReducer from "./spotifyReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  search: spotifyReducer
});
