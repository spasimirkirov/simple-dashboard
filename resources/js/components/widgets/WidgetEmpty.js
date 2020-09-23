import React from 'react';
import {Link} from "react-router-dom";

export default function WidgetEmpty(props) {
    return (
        <Link to={{pathname: "/widgets/create/" + props.position,}}>
            <i className="fa fa-plus-circle fa-2x text-primary" aria-hidden="true"> </i>
        </Link>
    )
}
