 import { FETCH_DEVICE_NAME,
          FETCH_DEVICE_NAME_SUCCESS,
          FETCH_DEVICE_NAME_FAILURE
    } from '../actions/constants';
export const deviceReducer =(curState={

},action)=>{
    let newState;
    switch(action.type){
        case FETCH_DEVICE_NAME:
            newState={...curState,deviceId:action.payload.id,isLoading:FETCH_DEVICE_NAME,error:null}
        break;
        case FETCH_DEVICE_NAME_SUCCESS:
            newState={...curState,device:action.payload.device,isLoading:FETCH_DEVICE_NAME_SUCCESS}
        break;
        case FETCH_DEVICE_NAME_FAILURE:
            newState={...curState,device:{},isLoading:FETCH_DEVICE_NAME_FAILURE,error:action.pyaload.error}
        break;
        default:
            newState=curState;
    }
return newState;
}