import React from 'react';

export default function renderWidget(props) {
    const color_class = 'btn btn-lg widget-' + props.data.color;
    return (
        <a className={color_class} href={props.data.url}>
            {props.data.title}
        </a>
    )
}
