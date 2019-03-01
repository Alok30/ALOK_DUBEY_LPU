import React, { Component } from 'react'
import './addUser'
import axios from 'axios'
var querystring =require('querystring')
const css_card1={
    width: "241px",
    height: "221px"
}
const css_style_container={
    position: "relative",
    left: "390px",
    top: "50px"
}
const css_some_details={
    marginTop:"-13px"
}
const css_button={
    position:"relative",
    left:"167px"
}

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
            <div className="container css_conatiner " style={css_style_container}>
                <div className="row ">
                    <div className="col-md-6 rectangle" className="css_form">
                       
                            <form onSubmit={this.handleSubmit} >
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
                                <button type="submit" class="btn btn-success btn-md" style={css_button}>Save</button>
                            </form>
                      </div>
                        <div className="col-md-6 rectangle1 ">
                            <div className="card " style={css_card1}>
                                <div className="card-body ">
                                    <h5 className="card-title">Consumers Available</h5>
                                    <h5 >Aionic</h5>
                                    <p className="text-muted" style={css_some_details}>Some details</p>
                                    <p className="text-muted" style={css_some_details}>More details</p>
                                    <h5 >Mandhar</h5>
                                    <p className="text-muted" style={css_some_details}>Some details</p>
                                    <p className="text-muted" style={css_some_details}>More details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        )
    }
}