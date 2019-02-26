import { createStore, combineReducers, applyMiddleware } from 'redux';
import {deviceListReducer} from './reducers/homeReducer';
import {deviceDetailsReducer} from './reducers/deviceDetaislReducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store=createStore(
    combineReducers({
        deviceList:deviceListReducer,
        deviceDetails:deviceDetailsReducer
    }),
    {
    deviceList:{deviceID:null,device:{},isLoading:false,error:null},
    deviceDetails:{deviceId:null,device:{},isLoading:false,error:null}
    },
    composeWithDevTools ( applyMiddleware(logger,thunk))
);