import {

    POST_DETAILS,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAILURE,
    POST_DETAILS_UPDATE



} from "../actions/constants";

export const postDetailsReducer = (curState = {

    form: {
        devicename: '', mapper_filename: '', connection: '', message_format: ''
        , adpater: '', com_port: '', parity: '', buad_rate: '', btye_size: '',
        encoding: '', connected: '', stop_bits: '', ip_address: '', mapper_file: '', host_ip: ''
    },
    data: null,
    valid: false
}
    , action) => {
    let newState;
    switch (action.type) {
        case POST_DETAILS:
            newState = { ...curState, error: null, isLoading: POST_DETAILS };
            break;
        case POST_DETAILS_SUCCESS:
            newState = { ...curState, isLoading: POST_DETAILS_SUCCESS, data: action.payload.data };
            break;
        case POST_DETAILS_FAILURE:
            newState = { ...curState, isLoading: POST_DETAILS_FAILURE, data: {}, error: action.payload.error };
            break;
        case POST_DETAILS_UPDATE:
            newState = { ...curState, isLoading: POST_DETAILS_UPDATE, form: { ...action.payload.form } };
        default:
            newState = curState;
    }
    return newState;
}
