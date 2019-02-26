import { createStore, combineReducers, applyMiddleware } from 'redux';
import {deviceListReducer} from './reducers/homeReducer';
import {deviceDetailsReducer} from './reducers/deviceDetaislReducer';
import { deviceReducer} from './reducers/deviceReducer';
import {postPortRedcuer} from './reducers/postPortReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store=createStore(
    combineReducers({
        deviceList:deviceListReducer,
        deviceDetails:deviceDetailsReducer,
        deviceInfo: deviceReducer,
        devicepostPORT:postPortRedcuer
    }),
    {
    deviceList:{deviceID:null,device:{},isLoading:false,error:null},
    deviceDetails:{deviceId:null,device:{},isLoading:false,error:null},
    deviceInfo:{deviceId:null,device:{},isLoading:false,error:null},
    devicepostPORT:{
        form:{
           host_name:'',
           ip_address:'',
           port_no:''
        },
       data:null,
        valid:false
    }
    },
    composeWithDevTools ( applyMiddleware(logger,thunk))
);