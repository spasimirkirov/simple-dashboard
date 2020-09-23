import React from "react";
import SelectColor from "./color.select";
import {withRouter} from "react-router-dom";
import WidgetCard from "../WidgetCard";

const WidgetCreate = (props) => {
    const {handlers} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('position', props.match.params.position_id)
        handlers.handleCreate(formData)
    }

    const handleBack = e => {
        e.preventDefault();
        props.history.goBack();
    }

    return (
        <div className="col-12 col-md-4">
            <WidgetCard>
                <form method="post" action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label> Title
                            <input className="form-control" type="text" name="title"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label> URL
                            <input className="form-control" type="text" name="url"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <SelectColor/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success mr-2">Create</button>
                        <button className="btn btn-info text-light" onClick={handleBack}>Back</button>
                    </div>
                </form>
            </WidgetCard>
        </div>
    )
}

export default withRouter(WidgetCreate)
