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
import humanLogo from './humain logo@2x.png'
export default class app extends Component {

  render() {


    return (
      <div className="">
        <nav className="navbar div_nav ">
           <a className="navbar-brand " href="#">
            <img src={humanLogo} width="30" height="30" className="d-inline-block align-top humain-logo" alt="" />
            <span className="device-management">Device Managment</span>
            </a>
          <form className="form-inline ">
            <Link to='/home' className="hosts-devices" type="submit">Host & Devices</Link>
            <Link to='/Settings' className="settings">Settings</Link>
            <Link to='/port' className="add-new-host" >+ Add New Host</Link>
          
          </form>
         
       

          </nav>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/addUser' component={addUser}></Route>
          <Route path='/config' component={config}></Route>
          <Route path='/:host_ip/:device_name' component={DetailsPage}></Route>
          <Route path='/:id' component={LandingPage}></Route>
          <Route path='/port' component={portdetails}></Route>
          <Route path='/form' component={popUp}></Route>
          <Route path='/:setting' component={portForm}></Route>
          <Route path='/Settings' component={demo}></Route>
        </Switch>
      </div>




    )
  }
};
