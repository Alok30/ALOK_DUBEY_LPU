import React, { Component } from "react";
import "./deviceLandingScreen.css";
import { Link } from 'react-router-dom'
import {
  FETCH_DEVICE_LANDING,
  FETCH_DEVICE_LANDING_SUCCESS,
  FETCH_DEVICE_LANDING_FAILURE,
} from '../actions/constants'
import { getDeviceDetailsThunk } from '../actions/creators';
// import Popup from './Popup';
import DeviceName from '../containers/details'
import Configuration from '../containers/config';
import { all } from "q";
import axios from "axios";
import PortForm from '../containers/portdetails';
import './device.css'
class Popup extends React.Component {
  
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Leela</h1>
          <button onClick={() => { }}>close me</button>
        </div>
      </div>
    );
  }
}

export default class deviceLandingScreen extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      oid: undefined,
      getHostDetailsResponse: [],
      getDeviceDetails: undefined,
      showPortDetailsPopUp: false,
      showConfigureDetailsPopUp: false,
      deviceName: undefined
    };
  }
  // togglePopup() {
  //   this.setState({
  //     showPopup: !this.state.showPopup
  //   });
  // }
  handlePopUp = (hostName) => {
    this.setState({ showPopup: !this.state.showPopup, oid: hostName });
  }

  getHostDetails = (id) => {
    console.log(window.location.origin);
    console.log( `http://localhost:8000/v1/api/add-device/${id}/`);
    axios.get(`http://localhost:8000/v1/api/get-host-detail/${id}/`).then(response => {
      this.setState({
        getHostDetailsResponse: response.data,
        showPortDetailsPopUp: true
      })
    }).catch(error => {
      console.log(error);
    })
    // axios.get(window.location).then().catch()
  }

  getDeviceDetails = (id, name) => {
    axios.get(`http://localhost:8000/v1/api/devices-details/${id}/${name}/`).then(response => {
      this.setState({
        getDeviceDetails: response.data,
        showConfigureDetailsPopUp: true,
        deviceName: name
      })
    }).catch(error => {
      console.log(error);
    })
  }


render() {

  let allDevices = this.props.deviceDetails.device.data;
  console.log(allDevices);
  let oidc = this.props.deviceDetails;
  let el;
  switch (this.props.deviceDetails.isLoading) {
    case FETCH_DEVICE_LANDING:
      el = (
        <div>
          <h2>wait</h2>
        </div>
      );
      break;
    case FETCH_DEVICE_LANDING_SUCCESS:
      el = (
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">{allDevices.host_name}</li>
            </ol>
            <div>{allDevices.host_name}</div>
            <span>IP: {allDevices.ip_address}</span>
            <span style={{ "font-weight": "bold" }}>.</span>
            <span> Port No: {allDevices.port_no}</span>
            <div>
              <span style={{ "font-weight": "bold", "color": "#00ff00" }}>.</span> <span> Connected</span>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => this.getHostDetails(allDevices._id.$oid)} > Configure Host</button>

              <button type="button" className="btn btn-success" onClick={() => this.handlePopUp(allDevices._id.$oid)} >+ Add New Device</button>

          </nav>
          {this.state.showPopup &&
            <Configuration oid={this.state.oid} />

          }
          {this.state.showPortDetailsPopUp && <PortForm data={this.state.getHostDetailsResponse} type={"configureHost"} oid={allDevices._id.$oid}/>}
          {this.state.showConfigureDetailsPopUp && <Configuration type={"configureDevice"} oid={allDevices._id.$oid} deviceName={this.state.deviceName} deviceResponse={this.state.getDeviceDetails}/>}

          <div className="row">
            {
              allDevices.devices.map(eachDevice => {
                return (
                  <div className="col-md-4 col-12 col-sm-6">
                    <div className="card">
                      <div className="card-body ">

                        <i className="fa fa-arrow-right float-right text-success "></i>
                        {/* <h5 className="card-title font_color ">Host Name  {device.devices.adapter}</h5> */}
                        {/* <h5 className="card-title font_color">Ip: {device.devices.ip_address}</h5>
                            <h5 className="card-title font_color">Port No:{device.devices.port_no}</h5> */}
                        {/* <h3>{device.devices[0].adapter}</h3> */}
                        {/* <h3>{device.devices.adapter}</h3> */}
                        <h5 >
                          {eachDevice.device_name}


                          {/* <Link to={`/${this.props.deviceDetails.device.host_ip}/${this.props.deviceDetails.device.device_name}`} component={DeviceName}>{device.ip_address}</Link> */}

                        </h5>
                        <h5>
                          port no: {eachDevice.port_no ? eachDevice.port_no : "null"}
                        </h5>
                        <h5>
                          adapter: {eachDevice.adapter}
                        </h5>
                        <h5>
                          mapper: {eachDevice.mapper_file}
                        </h5>
                      </div>
                      <div className="card-body">
                        
                        <button type="button" className="btn btn-success" onClick={() => this.getDeviceDetails(allDevices._id.$oid, eachDevice.device_name)} >Configure Device</button>

                        <Link to={`/${eachDevice.host_ip}/${eachDevice.device_name}`} component={DeviceName}>View Values</Link>

                      </div>
                    </div>

                  </div>

                )
              }
              )
            }






          </div>


        </div>

      )

      break;
    case FETCH_DEVICE_LANDING_FAILURE:

      el = (<div>
        <h2>error</h2>
        <h2>error.message</h2>

      </div>)

      break;
    default:
      el = (
        <div>default</div>
      );

  }

  return <div>   {el}

  </div>


}
componentDidMount() {
  this.props.dispatch(getDeviceDetailsThunk(this.props.match.params.id));


}
}
