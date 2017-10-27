export const BASE_URL = "https://api.spotify.com/v1/search?";
export const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
export const headers = {
  Authorization: "Bearer " + sessionStorage.getItem("accessToken")
};
export const fetch = { method: "get", headers: headers };
