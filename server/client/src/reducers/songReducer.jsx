import { FETCH_SONG } from "../actions/types";
// import { RECEIVE_RESULTS } from "../actions/search_actions";

export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_SONG:
      return action.results || false;
    default:
      return state;
  }
}

// const searchReducer = (state = {}, action) => {
//   Object.freeze(state);

//   switch (action.type) {
//     case RECEIVE_RESULTS:
//       return action.results;
//     default:
//       return state;
//   }
// };

// export default searchReducer;

// info below is from spotifys devolopers section on how to retrieve data, currently have it below to reference when I need.

// GET
// /v1/albums/{id}	Get an album	album	OAuth
// GET	/v1/albums?ids={ids}
// Get several albums	albums	OAuth
// GET	/v1/albums/{id}/tracks	Get an album's tracks	tracks*	OAuth
// GET
// /v1/artists/{id}
// Get an artist	artist	OAuth
// GET
// /v1/artists?ids={ids}
// Get several artists	artists	OAuth
// GET	/v1/artists/{id}/albums	Get an artist's albums	albums*	OAuth
// GET	/v1/artists/{id}/top-tracks	Get an artist's top tracks	tracks	OAuth
// GET	/v1/artists/{id}/related-artists	Get an artist's related artists	artists	OAuth
// GET	v1/audio-analysis/{id}	Get Audio Analysis for a Track	audio analysis object	OAuth
// GET	/v1/audio-features/{id}	Get audio features for a track	audio features	OAuth
// GET	/v1/audio-features?ids={ids}	Get audio features for several tracks	audio features	OAuth
// GET	/v1/browse/featured-playlists	Get a list of featured playlists	playlists	OAuth
// GET	/v1/browse/new-releases	Get a list of new releases	albums*	OAuth
// GET	/v1/browse/categories	Get a list of categories	categories	OAuth
// GET	/v1/browse/categories/{id}	Get a category	category	OAuth
// GET	/v1/browse/categories/{id}/playlists	Get a category's playlists	playlists*	OAuth
// GET	/v1/me	Get current user's profile	user	OAuth
// GET	/v1/me/following	Get Followed Artists	artists	OAuth
// PUT	/v1/me/following	Follow Artists or Users	-	OAuth
// DELETE	/v1/me/following	Unfollow Artists or Users	-	OAuth
// GET	/v1/me/following/contains	Check if User Follows Users or Artists	true/false	OAuth
// PUT	/v1/users/{owner_id}/playlists/{playlist_id}/followers	Follow a Playlist	-	OAuth
// DELETE	/v1/users/{owner_id}/playlists/{playlist_id}/followers	Unfollow a Playlist	-	OAuth
// PUT	/v1/me/tracks?ids={ids}
// Save tracks for user	-	OAuth
// GET
// /v1/me/tracks
// Get user's saved tracks	saved tracks	OAuth
// DELETE	/v1/me/tracks?ids={ids}	Remove user's saved tracks	-	OAuth
// GET
// /v1/me/tracks/contains?ids={ids}
// Check user's saved tracks	true/false	OAuth
// PUT	/v1/me/albums?ids={ids}
// Save albums for user	-	OAuth
// GET
// /v1/me/albums
// Get user's saved albums	saved albums	OAuth
// DELETE	/v1/me/albums?ids={ids}	Remove user's saved albums	-	OAuth
// GET
// /v1/me/albums/contains?ids={ids}
// Check user's saved albums	true/false	OAuth
// GET	/v1/me/top/{type}	Get a user's top artists or tracks	artists or tracks	OAuth
// GET	/v1/recommendations	Get recommendations based on seeds	recommendations object	OAuth
// GET
// /v1/search?type=album	Search for an album	albums*	OAuth
// GET
// /v1/search?type=artist
// Search for an artist	artists	OAuth
// GET	/v1/search?type=playlist	Search for a playlist	playlists*	OAuth
// GET	/v1/search?type=track	Search for a track	tracks	OAuth
// GET
// /v1/tracks/{id}
// Get a track	tracks	OAuth
// GET
// /v1/tracks?ids={ids}
// Get several tracks	tracks	OAuth
// GET
// /v1/users/{user_id}
// Get a user's profile	user*	OAuth
// GET	/v1/users/{user_id}/playlists	Get a list of a user's playlists	playlists*	OAuth
// GET	/v1/me/playlists	Get a list of the current user's playlists	playlists*	OAuth
// GET	/v1/users/{user_id}/playlists/{playlist_id}	Get a playlist	playlist	OAuth
// GET	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Get a playlist's tracks	tracks	OAuth
