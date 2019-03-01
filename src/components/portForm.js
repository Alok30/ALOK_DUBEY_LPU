import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    POST_PORT_NUMBER,
    POST_PORT_NUMBER_SUCCESS,
    POST_PORT_NUMBER_FAILURE,
    POST_PORT_FORM_UPDATE
} from '../actions/constants'

import { postPortThunk, postPortUpdate } from '../actions/creators';

const css_form={
    width: "412px",
    height: "292px",
    position: "relative",
    left: "380px"
}
const css_save_host={
    position: "relative",
    left: "285px",
    width: "116px",
    bottom: "37px"
}
const css_save_add_device={
    position: "relative",
    left: "46px",
    top: "2px",
    width: "168px"
}
const css_cancel={
    width: "108px",
    position: "relative",
    top: "2px"
}
export default class portForm extends Component {
    constructor(props) {
        super(props);
        this.host_nameInputRef = React.createRef();
        this.ip_addressInputRef = React.createRef();
        this.port_noInputRef = React.createRef();
        this.state = {
            host_name: '',
            ip_address: '',
            port_no: '',
            type: '',
            oid: ''
        }
    }
    // validateForm() {
    //     const { host_name, ip_address, port_no } = this.props.devicepostPORT.form;
    //     return host_name !== '' && ip_address !== '' && port_no !== '';
    // }
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
            port_no: this.state.port_no,
            type: this.state.type,
            oid: this.state.oid
        }));
    }

    componentDidMount() {
        if(this.props.data!=null && this.props.data.data[0]!=null) {
        this.setState({
            host_name: this.props.data.data[0]? this.props.data.data[0].host_name : '',
            ip_address: this.props.data.data[0] ? this.props.data.data[0].ip_address : '',
            port_no: this.props.data.data[0] ? this.props.data.data[0].port_no : '',
            type: this.props.type === 'configureHost' ? this.props.type : '',
            oid: this.props.oid ? this.props.oid : ''
        });
    } else {
        this.setState({
            host_name: '',
            ip_address: '',
            port_no: '',
            type: this.props.type === 'configureHost' ? this.props.type : '',
            oid: this.props.oid ? this.props.oid : ''
        });
    }
    }
    render() {
        let defaultData;
        if(this.props.data!=null && this.props.data.data[0]!=null) {
            defaultData = this.props.data.data[0];
        } else {
            defaultData = null;
        }
        return (
            <form onSubmit={this.postForm} style={css_form}>
                <div className="form-group">
                    <label >Host Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add a Number" defaultValue={ defaultData !== null ? defaultData.host_name : ""} onChange={(e) => this.updateInput(e, 'number')} ref={this.host_nameInputRef} />
                </div>
                <div className="form-group">
                    <div className='row'>
                        <div className="col-md-8">
                            <label >IP Address</label>
                            <input type="text" className="form-control" placeholder="Add  a IP" onChange={(e) => this.updateInput(e, 'ip')} ref={this.ip_addressInputRef} defaultValue={defaultData !== null ? defaultData.ip_address : ""} />
                        </div>
                        <div className="col-md-4">
                            <label >Port Number</label>
                            <input type="text" className="form-control" placeholder="Type" onChange={(e) => this.updateInput(e, 'port')} ref={this.port_noInputRef} defaultValue={this.props.type === 'configureHost' ? defaultData.port_no : ""} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <Link to='/home' type="submit" className="btn btn-primary btn-md" style={css_cancel}>
                        Cancel</Link>
                        
                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary btn-md" style={css_save_add_device} >Save & Add Device</button></div>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-success btn-md" style={css_save_host} > Save Host</button></div>
               
            </form>
        );
    }
}
