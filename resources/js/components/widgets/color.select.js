import React from "react";

const SelectColor = (props) => {
    return (
        <label> Color
            <select className="custom-select" name="color"  defaultValue={props.selected}>
                <option>Choose</option>
                <option value="red" className="text-danger">Red</option>
                <option value="green" className="text-success">Green</option>
                <option value="blue" className="text-primary">Blue</option>
            </select>
        </label>
    )
}

export default SelectColor;
