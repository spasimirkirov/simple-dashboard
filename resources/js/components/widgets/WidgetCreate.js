import React from "react";
import SelectColor from "./color.select";
import {withRouter} from "react-router-dom";

const WidgetCreate = (props) => {
    const {index, handlers} = props;
    const formRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        handlers.handleCreate(formRef.current, index)
    }

    const handleBack = e => {
        e.preventDefault();
        props.history.goBack();
    }
    return (
        <div className="col col-md-4 mb-2 p-1">
            <div className="card border rounded">
                <form ref={formRef}>
                    <div className="form-group d-flex justify-content-center">
                        <label> Title
                            <input className="form-control" type="text" name="title"/>
                        </label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label> URL
                            <input className="form-control" type="text" name="url"/>
                        </label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <SelectColor/>
                    </div>
                    <div className="form-group d-flex justify-content-around">
                        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Create</button>
                        <button className="btn btn-info text-light" onClick={handleBack}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(WidgetCreate)
