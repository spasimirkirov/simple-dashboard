import React from 'react';
import {withRouter} from "react-router-dom";
import * as Api from "../requests";
import * as API from "../requests";
import WidgetEdit from "./widgets/WidgetEdit";
import WidgetEmpty from "./widgets/WidgetEmpty";
import WidgetCard from "./WidgetCard";

class DashboardWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            widgets: []
        }
        this.handleWidgetCreate = this.handleWidgetCreate.bind(this);
        this.handleWidgetDelete = this.handleWidgetDelete.bind(this);
        this.handleWidgetUpdate = this.handleWidgetUpdate.bind(this);
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
            <div className="row">
                {!this.state.isLoading && Array(9).fill(null).map((slot, index) => {
                    if (this.state.widgets.length > 0) {
                        slot = this.state.widgets.find((widget) => {
                            return widget.position === index;
                        })
                    }
                    return (
                        <div className="col-1 col-md-4 mb-2" key={index}>
                            <WidgetCard>
                                {
                                    slot ?
                                        <WidgetEdit slot={slot} handlers={{
                                            handleUpdate: this.handleWidgetUpdate,
                                            handleDelete: this.handleWidgetDelete,
                                        }}/> :
                                        <WidgetEmpty position={index}/>
                                }
                            </WidgetCard>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const DashboardWithHistory = withRouter(DashboardWidgets);
export default DashboardWithHistory;
