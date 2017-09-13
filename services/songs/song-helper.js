require('isomorphic-fetch');
require('dotenv').config();

const CLIENT_ID= process.env.CLIENT_ID;
const CLIENT_SECRET= process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.RECIRECT_URI; 


function getSong(req, res, next) {
  fetch(`https://accounts.spotify.com/authorize/?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-read-private%20user-read-email&state=34fFs29kd09`)
  .then(fetchRes => {
    return fetchRes.json()
  })
  .then(jsonRes => {
    res.locals.getSong = jsonRes;
    console.log(jsonRes);
    return next();
  }).catch(err => {
    console.log(err);
    return next();
  })
}




module.exports = {
  getSong,
}
