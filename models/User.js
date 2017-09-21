const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  created: { type: Date, default: Date.now },
  days: { type: Number, default: 0 },
  profile: Object,
  googleId: String,
  spotifyId: String,
  token_type: String,
  expires_in: Number,
  refreshToken: String,
  display_name: String,
  accessToken: String,
  name: String,
  email: String,
  alltracks: [],
  images: [[Object]],
  playlists: [],
  ownPlaylist: []
});

mongoose.model("users", userSchema);

// user: {
// country: null,
//   display_name: String,
//   email: String,
//   external_urls: {},
// image: [],
//   // product: String,
//   type: String,
// uri: String
// }
