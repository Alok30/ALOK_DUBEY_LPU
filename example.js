var request = require("request");
//import qs from 'qs';
// var options = { method: 'GET',
//   url: 'http://localhost:8000/v1/api/list-host/',
//   headers: 
//    { 'postman-token': '9d9fbc19-1230-47b0-45f3-69b10901e2f1',
//      'cache-control': 'no-cache' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
// var data = new URLSearchParams();
// // data.append("host_name","hostname12");
// let data={
  
   
  
        
//             host_name: "hostname1",
//             ip_address: "127.0.0.35",
//             port_no: "80"
        
      
// }
// var options = { method: 'POST',
//   url: 'http://localhost:8000/v1/api/add-host/',
//   data: JSON.stringify(data),
//   headers: 
//    { 
//       "Content-Type": "application/x-www-form-urlencoded",
//      'postman-token': '9d9fbc19-1230-47b0-45f3-69b10901e2f1',
//      'cache-control': 'no-cache' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//   console.log(response)
//   console.log(body);
// });

// axios({
//   method: 'post',
//   url: 'http://localhost:8000/v1/api/add-host/',

 
//     data: {
//     host_name: 'hostname33',
//     ip_address: '145.54.56.6',
//     port_no:'23'
//   },

// headers: { 
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Cache-Control": "no-cache",
//     "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
//   }
// }).then(function (response) {
//   console.log("Heade With Authentication :" + response);
// });
// axios({
//   method: 'post',
//   url: 'http://localhost:8000/v1/api/add-host/',
//   data: {
//     host_name: 'hostname33',
//     ip_address: '145.54.56.6',
//     port_no:'23'
//   }
// });





const data={
  host_name: 'hostname33',
       ip_address: '145.54.56.6',
       port_no:'23'
}
  
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: {...data},
  url:`http://localhost:8000/v1/api/add-host/`,
};
axios(options);