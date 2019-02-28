import React, { Component } from 'react'
import logo from './Add Copy.svg'
import Remove from './Remove Copy.svg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { postDetailsThunk, postDetailsFormUpdate } from '../actions/creators'
export default class popup extends Component {
    constructor(props) {
        super(props);
        this.devicenameInputRef = React.createRef();
        this.mapper_filenameInputRef = React.createRef();
        this.connectionInputRef = React.createRef();
        this.message_formatInputRef = React.createRef();
        this.adpaterInputRef = React.createRef();
        this.com_portInputRef = React.createRef();
        this.parityInputRef = React.createRef();
        this.buad_rateInputRef = React.createRef();
        this.btye_sizeInputRef = React.createRef();
        this.encodingInputRef = React.createRef();
        this.connectedInputRef = React.createRef();
        this.stop_bitsInputRef = React.createRef();
        this.ip_addressInputRef = React.createRef();
        this.mapper_fileInputRef = React.createRef();
        this.host_ip = React.createRef();
    }
    validateForm() {
        const {
            device_name, mapper_filename, connection, message_format
            , adpater, com_port, parity, buad_rate, btye_size,
            encoding, connected, stop_bits, ip_address, mapper_file, host_ip

        } = this.props. deviceDetailsPORT.form
        return device_name !== '' && mapper_filename !== '' && connection !== '' && message_format !== ''
            && adpater !== '' && com_port !== '' && parity !== '' && buad_rate !== '' && btye_size !== '' &&
            encoding !== '' && connected !== '' && stop_bits !== '' && ip_address !== '' && mapper_file !== '' && host_ip !== ''
    }
    updateInput = (event, type) => {
        console.log("karthik", event.target.value+"  -->  "+ type);
        switch (type) {
            case "device":
                this.setState({
                    devicename: event.target.value
                });
                break;
            case "mapper":
                this.setState({
                    mapper_filename: event.target.value
                })
                break;
            case "connection":
                this.setState({
                    connection: event.target.value
                })
                break;
            case "adapter":
                this.setState({
                    adapter: event.target.value
                })
                break;
            case "message":
                this.setState({
                    message_format: event.target.value
                })
                break;
            case "ip_address":
                this.setState({
                    ip_address: event.target.value
                })
                break;
            case "port":
                this.setState({
                    com_part: event.target.value
                })
                break;
            case "com":
                this.setState({
                    com_part: event.target.value
                })
                break;
            case "parity":
                this.setState({
                    parity: event.target.value
                })
                break;
            case "baud":
                this.setState({
                    buad_rate: event.target.value
                })
                break;
            case "byte":
                this.setState({
                    btye_size: event.target.value
                })
                break;
            case "encode":
                this.setState({
                    encoding: event.target.value
                })
                break;
            case "bits":
                this.setState({
                    stop_bits: event.target.value
                })
                break;
            default:
                this.props.dispatch(postDetailsFormUpdate({
                    device_name: event.target.value,
                    mapper_filename: event.target.value,
                    stop_bits: event.target.value,
                    encoding: event.target.value,
                    btye_size: event.target.value,
                    buad_rate: event.target.value,
                    parity: event.target.value,
                    com_part: event.target.value,
                    ip_address: event.target.value,
                    message_format: event.target.value,
                    adapter: event.target.value,
                    connection: event.target.value
                }))
                break;
        }
    }
    postForm = (event) => {
        console.log("karthik", this.state);
        event.preventDefault();
        this.props.dispatch(postDetailsThunk({
            device_name: this.state.devicename,
            mapper_file: this.state.mapper_file,
            connection: this.state.connection,
            message_format: this.state.message_format,
            adapter: this.state.adpater,
            com_part: this.state.com_part,
            parity: this.state.parity,
            buad_rate: this.state.buad_rate,
            btye_size: this.state.btye_size,
            encoding: this.state.encoding,
            stop_bits: this.state.stop_bits,
            ip_address: this.state.ip_address
        }));
    }
    render() {
        return (

            <form onSubmit={this.postForm}>
                <h2>Device Configuration</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div class="form-group">
                            <label>Device Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Add a name" onChange={(e) => this.updateInput(e, 'device')} ref={this.devicenameInputRef} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail2">Mapper File</label>
                            <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'mapper')} ref={this.mapper_fileInputRef} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Adapter</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'adapter')} ref={this.adpaterInputRef}
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputPassword2">Connection</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type"
                                        onChange={(e) => this.updateInput(e, 'connection')} ref={this.connectedInputRef}></input>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group">
                                    <label for="device">Message Format</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type"
                                        onChange={(e) => this.updateInput(e, 'message')} ref={this.message_formatInputRef} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword3">IP Address</label>
                            <input type="text" class="form-control" id="exampleInputPassword3" placeholder="192.168.46.89"
                                onChange={(e) => this.updateInput(e, 'ip_address')} ref={this.ip_addressInputRef} />
                        </div></div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword4">Port Number</label>
                            <input type="text" class="form-control" id="exampleInputPassword4" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'port')} ref={this.port}
                            />
                        </div></div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword5">Communication Port</label>
                            <input type="text" class="form-control" id="exampleInputPassword5"
                                onChange={(e) => this.updateInput(e, 'com')} ref={this.com_portInputRef} />
                        </div></div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Parity</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'parity')} ref={this.parityInputRef} />
                        </div></div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword6">Baud rate</label>
                            <input type="text" class="form-control" id="exampleInputPassword6" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'baud')} ref={this.buad_rateInputRef} />
                        </div></div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword7">Byte Size</label>
                            <input type="text" class="form-control" id="exampleInputPassword7" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'byte')} ref={this.btye_sizeInputRef} />
                        </div></div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Encoding</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'encode')} ref={this.encodingInputRef} />
                        </div></div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword8">Stop Bits</label>
                            <input type="text" class="form-control" id="exampleInputPassword8" placeholder="Type"
                                onChange={(e) => this.updateInput(e, 'bits')} ref={this.stop_bitsInputRef} />
                        </div></div>
                </div>
                <h2>Consumers</h2>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1" >AIONIC</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">Mandhar</label>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputPassword9">Device Parameter Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword9" placeholder="Add a name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">AIONIC Parameter</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                            {/* <label for="exampleInputPassword1">Password</label> */}
                            <h2></h2>
                            <img src={logo} />
                            <img src={Remove} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div class="form-group">
                            {/* <label for="exampleInputPassword1">Password</label> */}
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Add a name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            {/* <label for="exampleInputPassword1">Password</label> */}
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">

                            <img src={logo} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                    </div>
                    <div className="col-md-2">
                        {/* <button type="submit" style={{ width: '160px' }} class="btn btn-primary">Cancel</button> */}
                    </div>
                    <div className="col-md-3">
                        <button type="submit" style={{ height: '36px', width: '255px' }} class="btn btn-primary">Save Device</button>
                    </div>
                </div>
            </form>

        );
    }
}
