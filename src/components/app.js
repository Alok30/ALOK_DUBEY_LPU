import React, { Component } from 'react'
import {Route,Switch } from 'react-router-dom'
import LandingPage from '../containers/deviceLanding'
import Home from '../containers/Home';
import DetailsPage from '../containers/details'
import popUp from  '../containers/popUpWindow';
// import infoPop from './popupdata'
export default class app extends Component {
  render() {
    console.log('insdie app ',this.props)
    return (
      <div className="container">
      <Switch>
          <Route path='/' exact  component={Home}/>
          <Route path='/:id' component={LandingPage}></Route>
          <Route path='/:ip_address/:device_name' component={DetailsPage}></Route>
        
       
          <Route path='/form' component={popUp}></Route>
         
          {/* <Route path='/popUp' component={infoPop}></Route> */}
      </Switch>
      </div>
    )
  }
};
