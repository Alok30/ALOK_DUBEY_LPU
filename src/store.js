import { createStore, combineReducers, applyMiddleware } from 'redux';
import {deviceListReducer} from './reducers/homeReducer';
import {deviceDetailsReducer} from './reducers/deviceDetaislReducer';
import { deviceReducer} from './reducers/deviceReducer';
import {postPortRedcuer} from './reducers/postPortReducer';
import {postDetailsReducer} from './reducers/configReduce';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store=createStore(
    combineReducers({
        deviceList:deviceListReducer,
        deviceDetails:deviceDetailsReducer,
        deviceInfo: deviceReducer,
        devicepostPORT:postPortRedcuer,
        deviceDetailsPORT:postDetailsReducer
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
    },
    deviceDetailsPORT:{
        form:{
            devicename:'', mapper_filename:'' ,connection:'',message_format:''
            ,adpater:'',com_port:'' ,parity:'' ,buad_rate:'' ,btye_size:'',
            encoding:'',connected:'' ,stop_bits:'' , ip_address:'' ,mapper_file:'' ,host_ip:''
        },
        data:null,
        vaild:false
    }
    },
  
    composeWithDevTools(applyMiddleware(logger,thunk))
);