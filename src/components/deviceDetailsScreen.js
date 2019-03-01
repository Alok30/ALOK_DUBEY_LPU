import React, { Component } from 'react'
import './app.css'
import {
  FETCH_DEVICE_NAME,
  FETCH_DEVICE_NAME_SUCCESS,
  FETCH_DEVICE_NAME_FAILURE
} from '../actions/constants'
import { getDeviceNameThunk } from '../actions/creators'
import axios from 'axios';
import { throws } from 'assert';


export default class deviceDetailsScreen extends Component {
  getDeviceDetails = (id, name) => {
    console.log('$$$4', id)
    console.log('al;okip', name)
    axios.get(`http://localhost:8000/v1/api/retry-values/127.0.0.35/${id}/${name}/`).then(response => {
      this.setState({
        getDeviceDetails: response.data,
      })
    }).catch(error => {
      console.log(error);
    })
  }
  render() {
  
    let el;
    console.log('props inside table alok++', this.props.deviceInfo.device)
    // let allDevices = this.props.deviceDetails;
    // console.log('222',allDevices);
    let dataDeatils = this.props.deviceInfo.device
    // console.log(dataDeatils)
    // console.log('alok',dataDeatils.data)
    //console.log(dataDeatils.data.device_name)
    console.log('+++++++++++++++++++++++++++++++alok', dataDeatils.data)

    switch (this.props.deviceInfo.isLoading) {
      case FETCH_DEVICE_NAME:
        el = (
          <div>

          </div>
        );
        break;
      case FETCH_DEVICE_NAME_SUCCESS:
        el = (

          <div className="container-fluid">
            <div className="row">
              <div className="col col-2">
                BARCODE
              </div>
              <div className="col col-2">
                PARAMETER ID
              </div>
              <div className="col col-2">
                PARAMETER MAPPING
              </div>
              <div className="col col-2">
                VALUE
              </div>
              <div className="col col-2">
                TIMESTAMP
              </div>
              <div className="col col-2">
                STATUS
              </div>
            </div>
            {
              this.props.deviceInfo.device.data.map(device => {
                if (device._id) {
                  return <div>
                    {
                      device.results.map(parameter => {
                        return <div className="row">
                          <div className="col col-2">
                            {device.specimen_id}
                        </div>
                          <div className="col col-2">
                          {parameter.parameter_mapping}
                        </div>
                          <div className="col col-2">
                          {parameter.parameter_name}
                        </div>
                          <div className="col col-2">
                          {parameter.parameter_result}
                        </div>
                          <div className="col col-2">
                          {device.timestamp}
                        </div>
                          <div className="col col-2">
                          {device.status}
                        </div>
                        </div>
                       
                      })
                    }
                  </div>
                }
              })
            }

          </div>


          // <table class="table">
          //   <thead>
          //     <tr className="rectangle">
          //       <th scope="col" className="barcode" id="col3">BARCODE</th>
          //       <th scope="col" className="parameter-id" id="col1">PARAMETER ID</th>
          //       <th scope="col" className="parameter-mapping" id="col4">PARAMETER MAPPING</th>
          //       <th scope="col" className="value" id="col5">VALUE</th>
          //       <th scope="col" className="timestamp" id="col6">TIMESTAMP</th>
          //       <th scope="col" className="status" id="col7">STATUS</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {
          //       this.props.deviceInfo.device.data.map(device => {
          //         if (device._id) {
          //           return <tr>

          //             {
          //               device.results.map(
          //                 parameter => {
          //                   return <tr>


          //                     <td scope="col" className="barcode"> {device.specimen_id}</td>
          //                     <td>

          //                       <td>{parameter.parameter_mapping}</td>
          //                       <td>{parameter.parameter_name}</td>
          //                       <td></td>

          //                     </td>
          //                     <td>{device.timestamp}</td>
          //                     <td>{device.status}</td>
          //                   </tr>
          //                 }
          //               )
          //             }


          //             {/* <button type="button" className="btn btn-success" onClick={() => this.getDeviceDetails(device.device_id, device._id.$oid)} >Configure Device</button> */}

          //           </tr>
          //         }
          //       })
          //     }
          //   </tbody>
          // </table>
        );
        break;
      case FETCH_DEVICE_NAME_FAILURE:
        el = (<div>
          Failure
          </div>)
        break;
      default:
        el = (<div></div>);
    }
    return <div>  {el}
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  }
  componentDidMount() {
    this.props.dispatch(getDeviceNameThunk(this.props.match.params.host_ip, this.props.match.params.device_name))
  }
}