import React, { Component } from 'react'

import {
    POST_PORT_NUMBER,
    POST_PORT_NUMBER_SUCCESS,
    POST_PORT_NUMBER_FAILURE,
    POST_PORT_FORM_UPDATE
} from '../actions/constants'

import { postPortThunk, postPortUpdate } from '../actions/creators';

export default class portForm extends Component {
    constructor(props) {
        super(props);
        this.host_nameInputRef = React.createRef();
        this.ip_addressInputRef = React.createRef();
        this.port_noInputRef = React.createRef();
        this.state = {
            host_name: '',
            ip_address: '',
            port_no: ''
        }
    }
    validateForm() {
        const { host_name, ip_address, port_no } = this.props.devicepostPORT.form;
        return host_name !== '' && ip_address !== '' && port_no !== '';
    }
    updateInput = (event, type) => {
        switch (type) {
            case "port":
                this.setState({
                    port_no: event.target.value
                });
                break;
            case "ip":
                this.setState({
                    ip_address: event.target.value
                });
                break;
            case "number":
                this.setState({
                    host_name: event.target.value
                });
            default:
                this.props.dispatch(postPortUpdate({
                    port_no: event.target.value,
                    ip_address: event.target.value,
                    host_name: event.target.value
                }))
                break;

        }

    }
    postForm = (event) => {
        event.preventDefault();
        this.props.dispatch(postPortThunk({
            host_name: this.state.host_name,
            ip_address: this.state.ip_address,
            port_no: this.state.port_no
        }));
    }
    render() {
        return (
            <form onSubmit={this.postForm}>
                <div className="form-group">
                    <label >Host Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add a Number" onChange={(e) => this.updateInput(e, 'number')} ref={this.host_nameInputRef} />
                </div>
                <div className="form-group">
                    <div className='row'>
                        <div className="col-md-8">
                            <label >IP Address</label>
                            <input type="text" className="form-control" placeholder="Add  a IP" onChange={(e) => this.updateInput(e, 'ip')} ref={this.ip_addressInputRef} />
                        </div>
                        <div className="col-md-4">
                            <label >Port Number</label>
                            <input type="text" className="form-control" placeholder="Type" onChange={(e) => this.updateInput(e, 'port')} ref={this.port_noInputRef} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        {/* <button type="submit" className="btn btn-primary">Cancel</button> */}
                    </div>
                    <div className="col-md-7">
                        {/* <button type="submit" className="btn btn-primary">Save & Host Device</button></div> */}
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary"> Save Host</button></div>
                </div>
            </form>
        );
    }
}
