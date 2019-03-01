import React, { Component } from 'react'
import './app.css'
import {
  FETCH_DEVICE_NAME,
  FETCH_DEVICE_NAME_SUCCESS,
  FETCH_DEVICE_NAME_FAILURE
} from '../actions/constants'
import { getDeviceNameThunk } from '../actions/creators'
import axios from 'axios';
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
          <table class="table">
            <thead>
              <tr className="rectangle">
                <th scope="col" className="barcode">BARCODE</th>
                <th scope="col" className="parameter-id">PARAMETER ID</th>
                <th scope="col">PARAMETER MAPPING</th>
                <th scope="col">VALUE</th>
                <th scope="col">TIMESTAMP</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.deviceInfo.device.data.map(device => {
                  if (device._id) {
                    return <tr>
                      <th scope="row">alok</th>
                      <td>{device.specimen_id}</td>
                      <td>BP</td>
                      <td></td>
                      <td>{device.timestamp}</td>
                      <td>{device.status}
                        {/* <Link to='/${}' component={}>{device.status}</Link> */}
                      </td>
                      <td>before:{device.device_id}</td>
                      <td>ip:{device._id.$oid}</td>
                      <td>host_ip{device.host_ip}</td>
                      <button type="button" className="btn btn-success" onClick={() => this.getDeviceDetails(device.device_id, device._id.$oid)} >Configure Device</button>
                    </tr>;
                  }
                })
              }
            </tbody>
          </table>
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