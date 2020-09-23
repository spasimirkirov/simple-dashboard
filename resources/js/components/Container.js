import React from "react";

export default function Container(props) {
    return (
        <div className="container-fluid mt-1 mt-md-4">
            {props.children}
        </div>
    )
}
