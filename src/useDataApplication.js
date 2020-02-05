/* eslint-disable */

let Twitter = require('twitter');

const { consumer_key, consumer_secret, access_token_key, access_token_secret } =
  require('../keys');

let client = new Twitter({

  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
});

// let params1 = { id: '1' };
// client.get('/trends/place.json', params1, function (error, tweets, response) {
//   if (!error) {
//     console.log(tweets[0]);
//   } else {
//     console.log(error)
//   }
// });
let params2 = { id: '9807' };
client.get('/trends/place.json', params2, function (error, tweets, response) {
  if (!error) {
    console.log(tweets[0]);
  } else {
    console.log(error)
  }
});
// let user_id = 878499037615444000;
// let stream = client.stream('statuses/filter', { track: 'trends', language: 'en', delimited: '35.7821120598956' });
// stream.on('data', function (event) {
//   console.log(event && event.text);
// });

// stream.on('error', function (error) {
//   throw error;
// });

// You can also get the stream in a callback if you prefer.
// client.stream('statuses/filter', { track: 'javascript' }, function (stream) {
//   stream.on('data', function (event) {
//     console.log(event && event.text);
//   });

//   stream.on('error', function (error) {
//     throw error;
//   });
// });