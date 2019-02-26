import React, { Component } from "react";
import "./deviceLandingScreen.css";
import {Link} from 'react-router-dom'
import {FETCH_DEVICE_LANDING,
  FETCH_DEVICE_LANDING_SUCCESS,
  FETCH_DEVICE_LANDING_FAILURE,
  } from '../actions/constants'
import {getDeviceDetailsThunk} from '../actions/creators';
import DeviceName from '../containers/details'
export default class deviceLandingScreen extends Component {

  render() {
    console.log('inside deviceLanding',this.props)
    let el;
    switch(this.props.deviceDetails.isLoading){
     case FETCH_DEVICE_LANDING:
      el=(
        <div>
          <h2>wait</h2>
        </div>
      );
        break;
      case FETCH_DEVICE_LANDING_SUCCESS:
      el=(
        el = (



          <div className="container">
            <div className="row">


              {
                this.props.deviceDetails.device.status.map(device => {
                  if (device._id) {
                    return(
                    <div className="col-md-4 col-12 col-sm-6 card_color">


                      <div className="card">
                        <div className="card-body ">

                          <i className="fa fa-arrow-right float-right text-success "></i>
                          <h5 className="card-title font_color ">Host Name  {device.host_name}</h5>
                          <h5 className="card-title font_color">Ip: {device.ip_address}</h5>
                          <h5 className="card-title font_color">Port No:{device.port_no}</h5>
                          <h3>{device.devices[0].adapter}</h3>
                          <p >
                       
                          
                          
                         
                                               
                       <Link to={`/${device.ip_address}/${device.devices[0].device_name}`} component={DeviceName}>{device.ip_address}</Link>
                                                
                        </p>
                        </div>
                      </div>
                    </div>
                    )
                  }
                })
              }




              {/* <div className="col-md-4 col-12 col-sm-6 card_color">
        
           
           <div className="card">
            <div className="card-body ">
               
               <i className="fa fa-arrow-right float-right text-success "></i>
               <h5 className="card-title font_color ">Host Name </h5>
               <h5 className="card-title font_color">Ip:</h5>
               <h5 className="card-title font_color">Port No:</h5>
               <p className="float-right text-success font_color">connected</p>
              <span> <p className="font_color">devices</p></span>
             </div>
            </div>
          </div>
          <div className="col-md-4 col-12 col-sm-6 card_color">
          
           
           <div className="card">
            <div className="card-body ">
               
               <i className="fa fa-arrow-right float-right text-success "></i>
               <h5 className="card-title font_color ">Host Name </h5>
               <h5 className="card-title font_color">Ip:</h5>
               <h5 className="card-title font_color">Port No:</h5>
               <a href="#" className="float-right text-success font_color">connected </a>
              <span> <p className="font_color">devices</p></span>
             </div>
            </div> 
        </div> */}
            </div>



          </div>

        )
      );
        break;
      case FETCH_DEVICE_LANDING_FAILURE:
      
        el = (<div>
          <h2>error</h2>
         

        </div>)
      
        break;
      default:
      el=(
        <div>default</div>
      );
     
    }
    
    return <div>   {el} </div>
    
    
  }
  componentDidMount(){
    this.props.dispatch(getDeviceDetailsThunk(this.props.match.params.id));


  }
}
