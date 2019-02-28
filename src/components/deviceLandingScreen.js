import React, { Component } from "react";
import "./deviceLandingScreen.css";
import { Link } from 'react-router-dom'
import {
  FETCH_DEVICE_LANDING,
  FETCH_DEVICE_LANDING_SUCCESS,
  FETCH_DEVICE_LANDING_FAILURE,
} from '../actions/constants'
import { getDeviceDetailsThunk } from '../actions/creators';
import Popup from './Popup';
import DeviceName from '../containers/details'
import { all } from "q";
export default class deviceLandingScreen extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  render() {

    let allDevices = this.props.deviceDetails.device.data;
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
          <div className="container">
            <div className="row">
              {
                allDevices.devices.map(eachDevice => {
                  return (
                    <div className="col-md-4 col-12 col-sm-6 card_color">
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
                          <a href="#" class="btn btn-primary">Configure Device</a>
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
