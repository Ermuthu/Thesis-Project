const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  created: { type: Date, default: Date.now },
  googleId: String,
  spotifyId: String,
  // user: String,
  accessToken: String,
  token_type: String,
  scope: String,
  expires_in: Number,
  refresh_token: String,
  display_name: String,
  accessToken: String,
  name: String,
  email: String,
  alltracks: [],
  image: [],
  playlists: [],
  ownPlaylist: [],
});

mongoose.model("users", userSchema);
