/* eslint-disable */

let Twitter = require('twitter');

let client = new Twitter({

  consumer_key: 'Tjukxfpgx68xbBLmxatUJIzAD',
  consumer_secret: 'RQ2349iQJ6pAVM2xSRq3O3JEjxW5wftSonV27I6Ouod2tjVb9g',
  access_token_key: '878499037615443969-FSPvH3p0U7RtI0rLGxHRWQ6vOzypOMJ',
  access_token_secret: 'RfZnecrE5JeQzvRTYpSW1md1zcVHnzXeGpYTglXRZatz5'
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