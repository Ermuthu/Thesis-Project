const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  created: { type: Date, default: Date.now },
  profile: Object,
  displayName: String,
  googleId: String,
  photos: String,
  emails: String,
  profileUrl: String,
  spotifyId: String,
  refreshToken: String,
  display_name: String,
  accessToken: String
});

mongoose.model("users", userSchema);

// token_type: String,
// days: { type: Number, default: 0 },
// name: String,
// email: String
// expires_in: Number,
