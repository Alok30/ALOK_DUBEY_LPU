import React, { Component } from 'react'
import './addUser'
import axios from 'axios'
var querystring =require('querystring')
export default class addUser extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
          
        
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        axios.post(`http://localhost:8000/v1/api/add-user-credential/`,
        querystring.stringify({
            ...data
        })

        )
        .then(response => response.data)

      }

      
      
// updateInput = (event, type) => {
//     switch (type) {
//         case "baseurl":
//             this.setState({
//                 baseurl: event.target.value
//             });
//             break;
//         case "username":
//             this.setState({
//                 userName: event.target.value
//             });
//             break;
//         case "password":
//             this.setState({
//                 password: event.target.value
//             });
//          break;

//     }

// }
postForm=(event,form)=>{
    event.preventDefault();
    console.log(form);
    
}
    render() {

        return (
            <div className="container ">
                <div className="row css_conatiner">
                    <div className="col-md-6 rectangle">
                       
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group" >
                                    <label for="exampleInputEmail1">Select Enviroment</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword2">Username</label>
                                    <input type="text" class="form-control" id="exampleInputPassword2" />
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-success btn-sm">Save</button>
                            </form>
                      </div>
                        <div className="col-md-6 rectangle1">
                            <div className="card " >
                                <div className="card-body">
                                    <h4 className="card-title">Consumers Available</h4>
                                    <h4 >Aionic</h4>
                                    <h6 className="style">Some details</h6>
                                    <h6 className="style">More details</h6>
                                    <h4 >Mandhar</h4>
                                    <h6 className="style">Some details</h6>
                                    <h6 className="style">More details</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        )
    }
}
