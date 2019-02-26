import React, { Component } from 'react'
import './app.css'
import {
 FETCH_DEVICE_NAME,
FETCH_DEVICE_NAME_SUCCESS,
FETCH_DEVICE_NAME_FAILURE} from '../actions/constants'
import {getDeviceNameThunk} from '../actions/creators'
export default class deviceDetailsScreen extends Component {
 
  render() {
    let el;
   console.log('props',this.props.deviceInfo.device.message)

   console.log('inside deviceDetails')
      switch(this.props.deviceInfo.isLoading){
        case FETCH_DEVICE_NAME:
          el=(
            <div>

            </div>
          );
          break;
        case FETCH_DEVICE_NAME_SUCCESS:
         el=(
          <table class="table">
          <thead>
            <tr>
              <th scope="col">BARCODE</th>
              <th scope="col">PARAMETER ID</th>
              <th scope="col">PARAMETER MAPPING</th>
              <th scope="col">VALUE</th>
              <th scope="col">TIMESTAMP</th> 
              <th scope="col">STATUS</th>
    
            </tr>
          </thead>
          <tbody>
            {
              this.props.deviceInfo.device.status.map(device=>{
                if(device._id)
                {

              return <tr>
              <th scope="row">alok</th>
              <td>{device.specimen_id}</td>
              <td>BP</td>
              <td></td>
              <td>{device.timestamp}</td>
              <td>{device.status}</td>
            </tr>;
            }
          })
        }

          </tbody>
        </table>
    
         );
         break;
          case FETCH_DEVICE_NAME_FAILURE:
          el=(<div></div>)
          break;
          default:
            el=(<div></div>);
      }
    return <div>  {el}</div>
   
    
  }
  componentDidMount(){
    this.props.dispatch(getDeviceNameThunk(this.props.match.params.host_ip,this.props.match.params.device_name))
  }
}