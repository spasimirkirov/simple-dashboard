import React from 'react';
import {withRouter} from "react-router-dom";

class DashboardWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.handleWidgetCreate = this.handleWidgetCreate.bind(this);
    }

    handleWidgetURL(e) {
        this.props.history.push(e.target.dataset.url)
    }

    handleWidgetCreate(position_id) {
        this.props.history.push(`/widget/create/${position_id}`)
    }

    render() {
        return Array(9).fill(null).map((slot, index) => {
            console.log('widgetCards')

            slot = this.props.widgets.find((widget) => {
                return widget.position === index;
            })

            return (
                <div className="col mb-2 p-1" key={index}>
                    <div className="card d-flex justify-content-center w-100 border">
                        {slot ? (
                            <a className='btn' onClick={this.handleWidgetURL} data-url={slot.url}>
                                slot.title}
                            </a>
                        ) : (
                            <a className='btn' onClick={() => this.handleWidgetCreate(index)}>
                                <i className="fa fa-plus-circle fa-3x text-primary" aria-hidden="true"> </i>
                            </a>
                        )}
                    </div>
                </div>
            )
        })
    }
}

const DashboardWithHistory = withRouter(DashboardWidgets);
export default DashboardWithHistory;
