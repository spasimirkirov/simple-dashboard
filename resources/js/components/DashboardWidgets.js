import React from 'react';
import {withRouter} from "react-router-dom";
import * as Api from "../requests";

class DashboardWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            widgets: []
        }
        this.handleWidgetCreate = this.handleWidgetCreate.bind(this);
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

    handleWidgetURL(e) {
        this.props.history.push(e.target.dataset.url)
    }

    handleWidgetCreate(position_id) {
        this.props.history.push(`/widgets/create/${position_id}`)
    }

    renderWidgetEmpty(index) {
        return (
            <div className="col mb-2 p-1" key={index}>
                <div className="card d-flex justify-content-center w-100 border rounded">
                    <a className='btn' onClick={() => this.handleWidgetCreate(index)}>
                        <i className="fa fa-plus-circle fa-2x text-primary" aria-hidden="true"> </i>
                    </a>
                </div>
            </div>
        )
    }

    renderWidget(slot) {
        const color_class = 'btn btn-lg ' + slot.color;
        return (
            <div className="col mb-2 p-1" key={slot.position}>
                <div className="card d-flex justify-content-center w-100 border rounded">
                    <a className={color_class} onClick={this.handleWidgetURL} data-url={slot.url}>
                        {slot.title}
                    </a>
                </div>
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
            return slot ? this.renderWidget(slot) : this.renderWidgetEmpty(index)
        })
    }
}

const DashboardWithHistory = withRouter(DashboardWidgets);
export default DashboardWithHistory;
