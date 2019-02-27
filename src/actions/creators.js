import * as Constants from './constants';
//import * DataService from './';
import * as deviceList from '../services/device';

function getDevice(){
    return {
        type:Constants.FETCH_DATA
    }
}
function getDeviceSuccess(device){
    return{
        type:Constants.FETCH_DATA_SUCCESS,
        payload:{
            device:device
        }
    }
}
function getDeviceFailure(error){
    return{
        type:Constants.FETCH_DATA_FAILURE,
        payload:{
            error:error
        }
    }
}
function getDeviceThunk(){
    return function(dispatch){
        dispatch(getDevice());

        deviceList.getDevice()
        .then(device=>dispatch( getDeviceSuccess(device) ))
        .catch(error=>dispatch( getDeviceFailure(error))) ;
    }
}
function getDeviceDetails(id){
        return {
            type:Constants.FETCH_DEVICE_LANDING,
            payload:{
                id:id
            }
        }
}
function getDeviceDetailsSuccess(device){
    return {
        type:Constants.FETCH_DEVICE_LANDING_SUCCESS,
        payload:{
            device:device
        }
    }
}
function getDeviceDetailsFailure(error){
    return{
        type:Constants.FETCH_DEVICE_LANDING_FAILURE,
        payload:{
            error:error
        }
        
    }
}
function getDeviceDetailsThunk(id){

        return function(dispatch){

            dispatch(getDeviceDetails(id))
            deviceList.getDeviceDetails(id)
            .then(device=>dispatch(getDeviceDetailsSuccess(device)))
            .catch(error=>dispatch(getDeviceDetailsFailure(error)));

        }
}
function getDeviceName(host_ip,device_name){
    return{
      type:Constants.FETCH_DEVICE_NAME,
      payload:{
          host_ip:host_ip,
          device_name:device_name
      }
    }
}
function getDeviceNameSuccess(device){
    return{
        type:Constants.FETCH_DEVICE_NAME_SUCCESS,
        payload:{

            device:device
        }
    }
}
function getDeviceNameFailure(error){
    return{
        type:Constants.FETCH_DEVICE_NAME_FAILURE,
        payload:{
            error:error
        }

    }
}
function getDeviceNameThunk(host_ip,device_name){
    return function(dispatch){
        dispatch(getDeviceName(host_ip,device_name))
        deviceList.getDeviceName(host_ip,device_name)
        .then(device=>dispatch(getDeviceNameSuccess(device)))
        .catch(error=>dispatch(getDeviceDetailsFailure(error)));
    }
}
function postPort(data){
    return {
        type:Constants.POST_PORT_NUMBER,
        payload:{
            data:data
        }
    }
}
function postPortSuccess(data){
    return{
        type:Constants.POST_PORT_NUMBER_SUCCESS,
        payload:{
            data:data
        }
    }
}
function postPortFailure(error){
    return{
        type:Constants.POST_PORT_NUMBER_FAILURE,
        payload:{
            error:error
        }
    }
}
function postPortUpdate(form){
   return{
       type:Constants.POST_PORT_FORM_UPDATE,
       payload:{
           form:form
       }
   
   
    }
}
function postPortThunk(data){
    return function(dispatch){
        dispatch(postPort(data))
        deviceList.postPort(data)
        .then(data=>dispatch(postPortSuccess(data)))
        .catch(error=>dispatch(postPortFailure(error)));
    }


}


function postDetails(data){
    return {
        type:Constants.POST_DETAILS,
        payload:{
            data:data
        }
    }
}

function postDetailsSuccess(data){
    return {
        type:Constants.POST_DETAILS_SUCCESS,
        payload:{
            data:data
        }
    }
}
function postDetailsFailure(error){
    return{
        type:Constants.POST_DETAILS_FAILURE,
        payload:{
            error:error
        }
    }
}
function postDetailsFormUpdate(form){
    return{
        type:Constants.POST_DETAILS_UPDATE,
        payload:{
            form:form
        }
    }
}
function postDetailsThunk(data){
    return function(dispatch){
        dispatch(postDetails(data))
        deviceList.postDetails(data)
        .then(data=>dispatch(postDetailsSuccess(data)))
        .catch(error=>dispatch(postDetailsFailure(error)));
    }
}

export {

    getDeviceSuccess,
    getDeviceFailure,
    getDeviceThunk,
    getDeviceDetails,
    getDeviceDetailsSuccess,
    getDeviceDetailsFailure,
    getDeviceDetailsThunk,
    getDeviceName,
    getDeviceNameSuccess,
    getDeviceNameFailure,
    getDeviceNameThunk,
    postPort,
    postPortSuccess,
    postPortFailure,
    postPortUpdate,
    postPortThunk,
    postDetails,
    postDetailsSuccess,
    postDetailsFailure,
    postDetailsFormUpdate,
    postDetailsThunk

  
    
}