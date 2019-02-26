import { FETCH_DEVICE_LANDING ,FETCH_DEVICE_LANDING_SUCCESS,FETCH_DEVICE_LANDING_FAILURE} from "../actions/constants";

export const deviceDetailsReducer =(curState={
   deviceid:null,
   device:{},
   isLoading:false,
   error:null

},action)=>{
    let newState;
        
    switch(action.type){
        case FETCH_DEVICE_LANDING:
           newState={...curState,deviceId:action.payload.id,error:null,isLoading:FETCH_DEVICE_LANDING}
           break;
        case FETCH_DEVICE_LANDING_SUCCESS:
           newState={...curState,isLoading:FETCH_DEVICE_LANDING_SUCCESS,device:action.payload.device}
           break;
        case FETCH_DEVICE_LANDING_FAILURE:
             newState={...curState,isLoading:FETCH_DEVICE_LANDING_FAILURE,device:{},error:action.payload.error}
           break;
        default:
        newState=curState;


    }
    return newState;
}

