import axios from 'axios';
const baseURL = `http://localhost:8000/v1/api/list-host/`
const detailURL = `http://localhost:8000/v1/api/list-devices`

const deviceURL = `http://localhost:8000/v1/api/list-values/`
const postPORTURL = `http://localhost:8000/v1/api/add-host/`

const headers = {

    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
};

export function getDevice() {
    return axios.get(baseURL, { mode: 'no-cors' }, headers)
        .then(response => response.data)

};
export function getDeviceDetails(id) {
    return axios.get(`${detailURL}/${id}`, { mode: 'no -cors' }, headers)
        .then(response => response.data)
}
export function getDeviceName(host_ip, device_name) {
    return axios.get(`${deviceURL}${host_ip}/${device_name}`, { mode: 'no -cors' }, headers)
        .then(response => response.data)
}
export function postPort(form) {
    console.log('inside service  alok dubey', { ...form })
    return axios.post(`http://localhost:8000/v1/api/add-host/`,{ ...form }, headers)
        .then(response => response.data)
}

axios({
          method: 'post',
          url: 'http://localhost:8000/v1/api/add-host/',
        
         
            data: {
                "port_no": "87",
                "ip_address": "12.23.33.3",
                "host_name": "passw"
              },

         
        
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
          }
        }).then(function (response) {
          console.log("Heade With Authentication :" + response);
        });
      
    

// export function postPort(form){

// axios({
//     method: 'post',
//     url: `${postPORTURL}`,
//     data: {...form}
// })
// .then(response>response.data    )

// }
//  export function postPort(form){
//     // Send a POST request
//     axios({
//       method: 'post',
//       url: 'http://localhost:8000/v1/api/add-host/',
//       data: {
//        ...form
//       },
//       headers: { 
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Cache-Control": "no-cache",
//         "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
//       }
//     }).then(function (response) {
//       console.log("Heade With Authentication :" + response);
//     })
  
//   }