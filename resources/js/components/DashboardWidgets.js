import React from 'react';
import {withRouter} from "react-router-dom";
import * as Api from "../requests";
import Container from "./Container";
import WidgetEmpty from "./widgets/WidgetEmpty";
import Widget from "./widgets/Widget";
import WidgetCard from "./WidgetCard";

class DashboardWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            widgets: []
        }
        this.handleWidgetCreate = this.handleWidgetCreate.bind(this);
        this.renderGrid = this.renderGrid.bind(this);
    }

    componentDidMount() {
        Api.findAll().then((res) => {
            this.setState({
                    widgets: res.data,
                    isLoading: false
                }
            )
        });
    }

    handleWidgetCreate(position_id) {
        this.props.history.push(`/widgets/create/${position_id}`)
    }

    renderGrid(slot, index) {
        if (this.state.widgets.length > 0) {
            slot = this.state.widgets.find((widget) => {
                return widget.position === index;
            })
        }
        return <div className="col-12 col-md-4 mb-4" key={index}>
            <WidgetCard>
                {
                    slot ? <Widget data={slot}/> : <WidgetEmpty position={index}/>
                }
            </WidgetCard>
        </div>
    }

    render() {
        return (
            <div className="row">
                {!this.state.isLoading && Array(9).fill(null).map(this.renderGrid)}
            </div>
        )
    }
}

const DashboardWithHistory = withRouter(DashboardWidgets);
export default DashboardWithHistory;
