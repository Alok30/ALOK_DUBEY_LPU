var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:8000/v1/api/list-host/',
  headers: 
   { 'postman-token': '9d9fbc19-1230-47b0-45f3-69b10901e2f1',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
