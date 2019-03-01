import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../containers/deviceLanding'
import Home from '../containers/Home';
import DetailsPage from '../containers/details'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import popUp from '../containers/popUpWindow';
import portForm from '../containers/portdetails';
import demo from './portdetails';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { browserHistory } from 'react-router';
import config from '../containers/config';
import portdetails from '../containers/portdetails';
import demo1 from './demo'
import addUser from './addUser';
import './app.css'
import model from './model';
import humanLogo from './humain logo@2x.png'
const css_button_font={
  fontSize:"15px"
}
export default class app extends Component {

  render() {


    return (
      <div className="">
         <nav className="navbar div_nav ">
           <a className="navbar-brand " href="#">
            <img src={humanLogo} width="30" height="30" className="d-inline-block align-top humain-logo" alt="" />
            <span className="device-management">Device Managment</span>
            </a>
          <form className="form-inline form_style" style={{css_button_font}}>
            <Link to='/home' className="hosts-devices css_button" style={{css_button_font}} >Host & Devices</Link>
            <Link to='/addUser' className="settings hosts-devices" style={{css_button_font}}>Settings</Link>
            <Link to='/port' className="add-new-host css_button1" style={{css_button_font}}>+ Add New Host</Link>
          
          </form>
         
       

          </nav>
        <Switch>
          <Route path='/model'component={model}></Route>
          <Route path='/port' component={portdetails}></Route>
          <Route path='/config' component={config}></Route>
          <Route path='/home' exact component={Home} />
          <Route path='/addUser' component={addUser}></Route>
          <Route path='/:host_ip/:device_name' component={DetailsPage}></Route>
          <Route path='/:id' component={LandingPage}></Route>
          <Route path='/Settings' component={demo}></Route>
          {/* <Route path='/form' component={popUp}></Route> */}
        </Switch>
      </div>




    )
  }
};
