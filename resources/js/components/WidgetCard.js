import React from 'react';

const WidgetCard = (props) => {
    return (<div className="card flex-center h-100 p-2 p-md-4">
        {props.children}
    </div>)
}

export default WidgetCard;
