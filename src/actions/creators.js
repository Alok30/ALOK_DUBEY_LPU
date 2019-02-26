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
function getDeviceName(device_name){
    return{
      type:Constants.FETCH_DEVICE_NAME,
      payload:{
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
function getDeviceNameThunk(device_name){
    return function(dispatch){
        dispatch(getDeviceName(device_name))
        deviceList.getDeviceName(device_name)
        .then(device=>dispatch(getDeviceNameSuccess(device)))
        .catch(error=>dispatch(getDeviceDetailsFailure(error)));
    }
}
export {


    getDevice,
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
    getDeviceNameThunk

  
    
}