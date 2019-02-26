import React, { Component } from 'react'
import logo from './Add Copy.svg'
import Remove from './Remove Copy.svg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default class popup extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <h2>Device Configuration</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Device Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add a name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mapper File</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Adapter</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Connection</label>
                                        <select class="form-control" id="sel1">
                                            <option>Select</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Message Format</label>
                                        <select class="form-control" id="sel1">
                                            <option>Select</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">IP Address</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="192.168.46.89" />
                            </div></div>
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Port Number</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type"/>
                            </div></div>
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Communication Port</label>
                                <select class="form-control" id="sel1">
                                    <option>Select</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div></div>
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Parity</label>
                                <select class="form-control" id="sel1">
                                    <option>Type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Baud rate</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type" />
                            </div></div>
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Byte Size</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type" />
                            </div></div>
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Encoding</label>
                                <select class="form-control" id="sel1">
                                    <option>select</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div></div>
                        <div className="col-md-3">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Stop Bits</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type" />
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
                                <label for="exampleInputPassword1">Device Parameter Name</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Add a name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputPassword1">AIONIC Parameter</label>
                                <select class="form-control" id="sel1">
                                    <option>Select</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
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
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Add a name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                {/* <label for="exampleInputPassword1">Password</label> */}
                                <select class="form-control" id="sel1">
                                    <option>Select</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
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
                            <button type="submit" style={{ width: '160px' }} class="btn btn-primary">Cancel</button>
                        </div>
                        <div className="col-md-3">
                            <button type="submit" style={{ height: '36px', width: '255px' }} class="btn btn-primary">Save Device</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
