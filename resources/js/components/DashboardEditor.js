import React from 'react';
import {withRouter} from "react-router-dom";
import * as Api from "../requests";
import * as API from "../requests";
import WidgetEdit from "./widgets/WidgetEdit";
import WidgetEmpty from "./widgets/WidgetEmpty";

class DashboardWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            widgets: []
        }
        this.handleWidgetCreate = this.handleWidgetCreate.bind(this);
    }

    resetState() {
        this.setState({
                widgets: [],
                isLoading: true
            }
        )
    }

    fetchWidgets() {
        Api.findAll().then((res) => {
            this.setState({
                    widgets: res.data,
                    isLoading: false
                }
            )
        });
    }

    componentDidMount() {
        this.resetState();
        this.fetchWidgets()
    }

    handleWidgetCreate(form, position_id) {
        const formData = new FormData(form);
        formData.append('position', position_id)
        API.widgetCreate(formData).then((res) => {
            this.resetState();
            this.fetchWidgets()
        })

    }

    handleWidgetUpdate(form, pos, id) {
        const formData = new FormData(form);
        formData.append('_method', 'PATCH');
        formData.append('position', pos);
        API.widgetUpdate(formData, id).then((res) => {
            this.resetState();
            this.fetchWidgets()
        })
    }

    handleWidgetDelete(index) {
        API.widgetDelete(index).then((res) => {
            this.resetState();
            this.fetchWidgets()
        })
    }

    render() {
        return (
            <div className="row row-cols-1 row-cols-3">
                {!this.state.isLoading && Array(9).fill(null).map((slot, index) => {
                    if (this.state.widgets.length > 0) {
                        slot = this.state.widgets.find((widget) => {
                            return widget.position === index;
                        })
                    }
                    return slot ?
                        <WidgetEdit slot={slot} handlers={{
                            handleUpdate: this.handleWidgetUpdate,
                            handleDelete: this.handleWidgetDelete,
                        }} key={index}/> : <WidgetEmpty position={index} key={index}/>
                })}
            </div>
        )
    }
}

const DashboardWithHistory = withRouter(DashboardWidgets);
export default DashboardWithHistory;
