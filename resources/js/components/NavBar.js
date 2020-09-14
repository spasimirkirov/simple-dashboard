import React, {Component} from 'react';
import {ModeContext} from "../context/mode-context";

export default class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ModeContext.Consumer>
                {(context) => {
                    return (
                        <nav className="navbar navbar-expand-sm navbar-light bg-blue">
                            <a className="navbar-brand" href="/">
                                <img src="/images/shkolo-logo.png" alt="shkolo logo" width="150"/>
                            </a>
                            <div className="custom-control custom-switch ml-auto">
                                <input type="checkbox" className="custom-control-input" id="customSwitch1"
                                       onChange={context.toggleMode} checked={context.enabled}/>
                                <label className="custom-control-label" htmlFor="customSwitch1">Toggle Editor
                                    Mode </label>
                            </div>
                        </nav>
                    )
                }}
            </ModeContext.Consumer>
        )
    }
}
