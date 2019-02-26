import  axios from 'axios';
const baseURL= `http://localhost:8000/v1/api/list-host/`
const detailURL=`http://localhost:8000/v1/api/list-devices`

const deviceURL=`localhost:8000/v1/api/list-values/127.0.0.35/`

const device_nam='con'
const headers = {
    
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
};

export function getDevice(){
    return axios.get(baseURL, {mode: 'no-cors'},headers)
    .then(response => response.data)

}; 
export function getDeviceDetails(id){
    return axios.get(`${detailURL}/${id}`,{mode: 'no -cors'},headers)
    .then (response=>response.data)
}
export function getDeviceName(device_name){
    return axios.get(`${deviceURL}/${device_name}/${device_nam}`,{mode:'no -cors'},headers)
    .then(response=>response.data)
}



