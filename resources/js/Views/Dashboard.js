import React, {Component} from 'react';
import DashboardEditor from "../components/DashboardEditor";
import DashboardWidgets from "../components/DashboardWidgets";
import {ModeContext} from "../context/mode-context";

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ModeContext.Consumer>
            {(context) => <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        context.enabled ?
                            <DashboardEditor/> :
                            <DashboardWidgets/>
                    }
                </div>
            </div>}
        </ModeContext.Consumer>
    }
}

export default Dashboard;
