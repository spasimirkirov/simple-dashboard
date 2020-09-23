import React from 'react';
import {withRouter} from "react-router-dom";
import * as Api from "../requests";
import * as API from "../requests";
import WidgetEdit from "./widgets/WidgetEdit";
import WidgetEmpty from "./widgets/WidgetEmpty";
import WidgetCard from "./WidgetCard";
import Alert from "./Notifications/Alert";
import Container from "./Container";

class DashboardWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            failed: false,
            errors: [],
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

    handleWidgetUpdate(formData, id) {
        API.widgetUpdate(formData, id).then((res) => {
            this.resetState();
            this.fetchWidgets()
        }).catch(err => {
            this.setState(() => {
                return {
                    failed: true,
                    errors: err.response.data.errors
                }
            });
        })
    }

    handleWidgetDelete(index) {
        API.widgetDelete(index).then((res) => {
            this.resetState();
            this.fetchWidgets()
        })
    }

    showErrors() {
        const {errors} = this.state;
        let message = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "<span aria-hidden=\"true\">&times;</span>\n" +
            "</button>"
        message += "Something went wrong <br>";
        for (const [key, value] of Object.entries(errors)) {
            message += key.charAt(0).toUpperCase() + key.slice(1) + ': ' + value.join("<br/>");
            message += "<br/>"
        }
        return <Alert type='error' message={message}/>
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-md-12">
                        {this.state.failed && this.showErrors()}
                    </div>
                </div>
                <div className="row">
                    {!this.state.isLoading && Array(9).fill(null).map((slot, index) => {
                        if (this.state.widgets.length > 0) {
                            slot = this.state.widgets.find((widget) => {
                                return widget.position === index;
                            })
                        }
                        return (
                            <div className="col-12 col-md-4 mb-2" key={index}>
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
            </div>
        )
    }
}

const DashboardWithHistory = withRouter(DashboardWidgets);
export default DashboardWithHistory;
