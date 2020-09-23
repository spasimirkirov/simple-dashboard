import React from "react";

export default function Alert(props) {
    const theme = {
        'error': 'alert-danger',
        'warning': 'alert-warning',
        'info': 'alert-info',
    }

    return (
        <div className={'alert alert-dismissable ' + theme[props.type]}
             dangerouslySetInnerHTML={{__html: props.message}} role="alert">
        </div>
    )
}
