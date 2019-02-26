import {FETCH_DATA,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from '../actions/constants';

export const deviceListReducer =(curState={
    isLoading:null,
    device:[],
    error:null
    
},action)=>{

    let newState;
    switch(action.type){

       case FETCH_DATA:
            newState={...curState,error:null,isLoading:FETCH_DATA}
            break;
        case FETCH_DATA_SUCCESS:
            newState={...curState,isLoading:FETCH_DATA_SUCCESS,device:action.payload.device}
            break;
        case FETCH_DATA_FAILURE:
            newState={...curState,isLoading:FETCH_DATA_FAILURE,device:[],error:action.payload.error}
            break;
        default:
           newState=curState;
          
    }
    return newState;

}