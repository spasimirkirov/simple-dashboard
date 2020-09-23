import React from 'react';
import {Link} from "react-router-dom";

export default function WidgetEmpty(props) {
    return (
        <div className="col mb-2 p-1">
            <div className="card text-center w-100 border rounded p-4">
                <Link to={{pathname: "/widgets/create/" + props.position,}}>
                    <i className="fa fa-plus-circle fa-2x text-primary" aria-hidden="true"> </i>
                </Link>
            </div>
        </div>
    )
}
