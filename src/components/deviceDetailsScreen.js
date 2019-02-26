import React, { Component } from 'react'
import './app.css'
import {
 FETCH_DEVICE_NAME,
FETCH_DEVICE_NAME_SUCCESS,
FETCH_DEVICE_NAME_FAILURE} from '../actions/constants'
import {getDeviceNameThunk} from '../actions/creators'
export default class deviceDetailsScreen extends Component {
  render() {
   
 console.log('inside deviceDetails')
    return (
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
        <tr>
          <th scope="row">2</th>
          <td>#123</td>
          <td>BP</td>
          <td>5.8</td>
          <td>12pm</td>
          <td>done</td>
        </tr>
        
      </tbody>
    </table>

    )
  }
  componentDidMount(){
    this.props.dispatch(getDeviceNameThunk(this.props.match.params.ip_address+this.props.match.params.device_name))
  }
}