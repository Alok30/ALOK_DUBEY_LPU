import {
POST_PORT_NUMBER,
POST_PORT_NUMBER_SUCCESS,
POST_PORT_NUMBER_FAILURE,
POST_PORT_FORM_UPDATE  } from '../actions/constants';
export const postPortRedcuer=(curState={

    form:{
        host_name: '',
        ip_address:'',
        port_no:''
    },
    data:null,
    valid:false
}
    ,action)=>{
        let newState;
        switch(action.type){
              case POST_PORT_NUMBER:
              newState={...curState,error:null,isLoading:POST_PORT_NUMBER};
                break;
              case POST_PORT_NUMBER_SUCCESS:
               newState={...curState,isLoading:POST_PORT_NUMBER_SUCCESS,data:action.payload.data};
                break;
              case POST_PORT_NUMBER_FAILURE:
                newState={...curState,isLoading:POST_PORT_NUMBER_FAILURE,data:{},error:action.payload.error};
                break;
              case POST_PORT_FORM_UPDATE:
                newState={...curState,isLoading:POST_PORT_FORM_UPDATE,form:{...action.payload.form}};
               default:
                  newState=curState;
        }
        return newState;
    }
