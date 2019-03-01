import axios from 'axios';

var querystring = require('querystring');

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
    console.log('++++++++sevoce post', host_ip, device_name);
    return axios.get(`${deviceURL}${host_ip}/${device_name}`, { mode: 'no -cors' }, headers)
        .then(response => response.data)
}
export function postPort(form) {
    console.log('inside service  alok dubey', { ...form })

    if(form.type === 'configureHost') {
        return axios.put(`http://localhost:8000/v1/api/edit-host-detail/${form.oid}/`,
        querystring.stringify({
            ...form
        })

        , headers)
        .then(response => response.data)
    } else {
        return axios.post(`http://localhost:8000/v1/api/add-host/`,
        querystring.stringify({
            ...form
        })

        , headers)
        .then(response => response.data)
    }
    
}


export function postDetails(form) {
    console.log('inside service  alok dubey post method for config', form.mapper_data);

    if(form.type === 'configureDevice') {
        return axios.put(`http://localhost:8000/v1/api/edit-device-details/${form.oid}/${form.device_name}/ `,
        querystring.stringify({
            ...form
        })

        , headers)
        .then(response => response.data)
    } else {
        return axios.post(`http://localhost:8000/v1/api/add-device/${form.oid}/`,
        querystring.stringify({
            ...form
        })

        , headers)
        .then(response => response.data)
    }
    

}