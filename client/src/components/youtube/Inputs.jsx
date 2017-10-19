import React from "react";
import { Field } from "redux-form";
import renderInput from "./renderInput";

export const YouTube = () => (
  <Field
    component={renderInput}
    type="text"
    name="term"
    placeholder="Search Youtube"
  />
);
