import React from 'react';
import {withRouter} from "react-router-dom";
import * as Api from "../requests";
import * as API from "../requests";

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

    renderWidgetEmpty(index) {
        const formRef = React.createRef();
        return (
            <div className="col mb-2 p-1" key={index}>
                <form ref={formRef}>
                    <div className="card d-flex justify-content-center w-100 border rounded">
                        <div className="form-group d-flex justify-content-center">
                            <label> Title
                                <input className="form-control" type="text" name="title"/>
                            </label>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <label> URL
                                <input className="form-control" type="text" name="url"/>
                            </label>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <label> Color
                                <select className="custom-select" name="color">
                                    <option>Choose</option>
                                    <option value="bg-danger" className="text-danger">Red</option>
                                    <option value="bg-success" className="text-success">Green</option>
                                    <option value="bg-primary" className="text-primary">Blue</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <button type="submit" className="btn btn-success" onClick={(e) => {
                                e.preventDefault();
                                this.handleWidgetCreate(formRef.current, index)
                            }}>Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    renderWidgetEdit(slot) {
        const formRef = React.createRef();
        return (
            <div className="col mb-2 p-1" key={slot.position}>
                <form ref={formRef}>
                    <div className="card d-flex justify-content-center w-100 border rounded">
                        <div className="form-group d-flex justify-content-center">
                            <label> Title
                                <input className="form-control" type="text" name="title" defaultValue={slot.title}/>
                            </label>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <label> URL
                                <input className="form-control" type="text" name="url" defaultValue={slot.url}/>
                            </label>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <label> Color
                                <select className="custom-select" name="color" defaultValue={slot.color}>
                                    <option value="bg-danger" className="text-danger">Red</option>
                                    <option value="bg-success" className="text-success">Green</option>
                                    <option value="bg-primary" className="text-primary">Blue</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group d-flex justify-content-around">
                            <button type="submit" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault();
                                this.handleWidgetUpdate(formRef.current, slot.position, slot.id)
                            }}>Update
                            </button>
                            <button type="submit" className="btn btn-danger" onClick={(e) => {
                                e.preventDefault();
                                this.handleWidgetDelete(slot.id)
                            }}>Delete
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return !this.state.isLoading && Array(9).fill(null).map((slot, index) => {
            if (this.state.widgets.length > 0) {
                slot = this.state.widgets.find((widget) => {
                    return widget.position === index;
                })
            }
            return slot ? this.renderWidgetEdit(slot) : this.renderWidgetEmpty(index)
        })
    }
}

const DashboardWithHistory = withRouter(DashboardWidgets);
export default DashboardWithHistory;
