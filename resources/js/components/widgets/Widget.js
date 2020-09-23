import React from 'react';

export default function renderWidget(props) {
    const color_class = 'btn btn-lg widget-' + props.data.color;
    return (
        <div className="col mb-2 p-1" key={props.data.position}>
            <div className="card d-flex justify-content-center w-100 border rounded">
                <a className={color_class} href={props.data.url}>
                    {props.data.title}
                </a>
            </div>
        </div>
    )
}
