import React, {Component} from 'react';
import DashboardEditor from "../components/DashboardEditor";
import DashboardWidgets from "../components/DashboardWidgets";
import {ModeContext} from "../context/mode-context";
import Container from "../components/Container";

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <ModeContext.Consumer>
                    {(context) => context.enabled ?
                        <DashboardEditor/> :
                        <DashboardWidgets/>
                    }
                </ModeContext.Consumer>
            </Container>
        )
    }
}

export default Dashboard;
