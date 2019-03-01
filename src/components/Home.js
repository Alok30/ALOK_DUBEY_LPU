import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './Home.css';
import { getDeviceThunk } from '../actions/creators';
import DeviceLanding from '../containers/deviceLanding';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/constants'
export default class Home extends Component {
  render() {
    console.log('++',this.props.deviceList.device);
    let el;
    switch (this.props.deviceList.isLoading) {
      case FETCH_DATA:
        el = (<div>
          <h2>wait</h2>
        </div>);
        break;
      case FETCH_DATA_SUCCESS:
        el = (
          <div className="container">
            <div className="row">
              {
                this.props.deviceList.device.data.map(device => {
                  if (device._id) {
                    return (
                    
                       
                      <div className="col-md-4 col-12 col-sm-6 ">

                        <div className="card">
                          <div className="card-body mt-10">
                            <i className="fa fa-arrow-right float-right text-success "></i>
                            <h5 className="card-title font_color">Host Name  {device.host_name}</h5>
                            <h5 className="card-title font_coloro">Ip: {device.ip_address}</h5>
                            <h5 className="card-title font_color">Port No:{device.port_no}</h5>
                            <Link to={`/${device._id.$oid}`} className="float-right" component={DeviceLanding}>connected</Link>

                            <p className="font_color">devices</p>
                          
                          </div>
                        </div>
                      </div>
                    
                    )
                  }
                })
              }
            </div>
          </div>
        )
        break;
      case FETCH_DATA_FAILURE:
        el = (<div>
          <h2>error</h2>
          {this.props.deviceList.error.message}

        </div>)
        break;

      default:
        el = (<div>
          <h1>Default</h1>
        </div>);




    }

    return <div>
      {el}
    </div>


  }

  componentDidMount() {
    this.props.dispatch(getDeviceThunk());
  }
}