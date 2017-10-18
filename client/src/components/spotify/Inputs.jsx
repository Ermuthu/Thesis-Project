import React from "react";
import { Field } from "redux-form";
import renderInput from "./renderInput";

export const Artist = () => (
  <Field
    component={renderInput}
    type="text"
    name="artist"
    placeholder="Search By Artist"
  />
);

export const Song = () => (
  <Field
    component={renderInput}
    type="text"
    name="song"
    placeholder="search by song"
  />
);

export const Genre = () => (
  <Field
    component={renderInput}
    type="text"
    name="genre"
    placeholder="Search by Genre"
  />
);

export const Playlist = () => (
  <Field
    component={renderInput}
    type="text"
    name="playlist"
    placeholder="Search by Playlist"
  />
);
