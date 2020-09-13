import React, {Component} from 'react';
import * as Api from '../requests';
import DashboardEditor from "../components/DashboardEditor";
import DashboardWidgets from "../components/DashboardWidgets";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorMode: false,
            widgets: []
        }
    }

    fetchWidgets() {
        Api.findAll().then((res) => {
            this.state.widgets = res.data ?? [];
        });
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                {
                    this.state.editorMode ?
                        null :
                        null
                }
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    this.state.editorMode ?
                        <DashboardEditor widgets={this.state.widgets}/> :
                        <DashboardWidgets widgets={this.state.widgets}/>
                }
            </div>
        </div>
    }
}

export default Dashboard;
