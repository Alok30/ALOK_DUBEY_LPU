import React, { Component } from 'react'

export default  class  Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
         <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Host Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add a Number" />
                       
                    </div>
                    <div className="form-group">
                         <div className='row'>
                         <div className="col-md-8">
                         <label for="exampleInputPassword1">IP Address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Add  a IP" />
                         </div>
                         <div className="col-md-4">
                         <label for="exampleInputPassword1">Port Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Type" />
                         </div>
                        </div>
                    </div>
                   <div className="row">
                      <div className="col-md-2">
                      <button type="submit" className="btn btn-primary">Cancel</button>
                      </div>
                      <div className="col-md-7">
                      <button type="submit" className="btn btn-primary">Save & Host Device</button></div>
                      <div className="col-md-3">
                      <button type="submit" className="btn btn-primary">Save Host</button></div>
                    </div>
                    
                </form>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>

          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }