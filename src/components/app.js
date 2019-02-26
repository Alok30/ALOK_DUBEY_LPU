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
import {browserHistory} from 'react-router';

import portdetails from '../containers/portdetails';

export default class app extends Component {
 
  render() {
    console.log('insdie app ', this.props)
    return (


      <div className="container">


        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Bootstrap
         </a>
         
           <form className="form-inline">


           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Host & Devices</button>
           <button className="btn btn-outline-success my-9 my-sm-0" type="submit">Settings</button>
            <button className="btn btn-outline-success my-9 my-sm-0" type="submit" >Settings</button>
          </form> 
        </nav>
        <Switch>   
        <Route path='/port' component={portdetails}></Route>
                      
             <Route path='/googleForm' component={portdetails}></Route>
            
            <Route path='/:host_ip/:device_name' component={DetailsPage}></Route>
             <Route path='/' exact component={Home} />
              <Route path='/:id' component={LandingPage}></Route>
           
          
           

             <Route path='/form' component={popUp}></Route>
             <Route path='/:setting' component={portForm}></Route>



            

             

           </Switch>
      </div>




    )
  }
};
